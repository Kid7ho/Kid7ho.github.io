'use client';

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import { allFields, areaColor, areas, fieldArea, fieldColor, papers, type AreaKey, type Field, type Paper } from '@/content/papers';
import { study, type Lang } from '@/content/site';

// Inner padding of the map, as a fraction of its size, so nodes and island labels never touch the edge.
const PAD = { x: 0.07, top: 0.13, bottom: 0.08 };
const px = (x: number) => PAD.x + x * (1 - 2 * PAD.x);
const py = (y: number) => PAD.top + y * (1 - PAD.top - PAD.bottom);
const pct = (v: number) => `${(v * 100).toFixed(2)}%`;

const sourceName = (url: string) => {
  if (url.includes('arxiv.org')) return 'arXiv';
  if (url.includes('aclanthology.org')) return 'ACL Anthology';
  if (url.includes('mlr.press')) return 'PMLR';
  return new URL(url).hostname;
};

type Island = { field: Field; x: number; y: number; count: number; align: 'start' | 'center' | 'end' };
type Selection = { area: AreaKey | null; field: Field | null };
type Group = { key: string; title: string; color: string; papers: Paper[]; also?: boolean };
type Section = { key: string; heading?: { title: string; color: string }; groups: Group[] };

const ALL: Selection = { area: null, field: null };
const inArea = (f: Field, area: AreaKey) => fieldArea[f] === area;
const tagCount = (f: Field) => papers.filter((p) => p.fields.includes(f)).length;
const areaCount = (a: AreaKey) => papers.filter((p) => p.fields.some((f) => inArea(f, a))).length;

// A paper matches a selection if any of its tags falls in it.
const paperMatches = (p: Paper, s: Selection) =>
  s.field ? p.fields.includes(s.field) : s.area ? p.fields.some((f) => inArea(f, s.area!)) : true;
// Territories and island labels belong to a main field only.
const fieldMatches = (f: Field, s: Selection) =>
  s.field ? f === s.field : s.area ? inArea(f, s.area) : true;

// Main-field papers first, then papers that only carry the tag as a secondary field.
function buildSections(s: Selection, lang: Lang): Section[] {
  const byMain = (f: Field) => papers.filter((p) => p.fields[0] === f);
  const fieldGroup = (f: Field): Group => ({ key: f, title: f, color: fieldColor[f], papers: byMain(f) });
  if (s.field) {
    const also = papers.filter((p) => p.fields[0] !== s.field && p.fields.includes(s.field!));
    return [{
      key: s.field,
      groups: [
        fieldGroup(s.field),
        { key: 'also', title: study.alsoTagged[lang], color: fieldColor[s.field], papers: also, also: true },
      ].filter((g) => g.papers.length),
    }];
  }
  const list = s.area ? areas.filter((a) => a.key === s.area) : areas;
  return list.map((a) => {
    const groups: Group[] = a.fields.map(fieldGroup).filter((g) => g.papers.length);
    if (s.area) {
      const also = papers.filter((p) => !inArea(p.fields[0], a.key) && p.fields.some((f) => inArea(f, a.key)));
      if (also.length) groups.push({ key: 'also', title: study.alsoTagged[lang], color: areaColor[a.key], papers: also, also: true });
    }
    return { key: a.key, heading: s.area ? undefined : { title: a.name, color: areaColor[a.key] }, groups };
  }).filter((sec) => sec.groups.length);
}

export function PaperMap({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<string | null>(null);
  const [selected, setSelected] = useState<Selection>(ALL);
  const [preview, setPreview] = useState<Selection | null>(null);
  const focus = preview ?? selected;
  const filtering = Boolean(focus.area || focus.field);
  const lastPointer = useRef<string>('mouse');
  const hideTimer = useRef<number | undefined>(undefined);
  const mapRef = useRef<HTMLDivElement>(null);

  const islands = useMemo<Island[]>(() => allFields.flatMap((field) => {
    const own = papers.filter((p) => p.fields[0] === field);
    if (!own.length) return [];
    const xs = own.map((p) => px(p.x));
    const ys = own.map((p) => py(p.y));
    const mid = xs.reduce((a, b) => a + b, 0) / xs.length;
    // Labels near the left or right edge are anchored to the cluster's outer node so they stay inside the map.
    const align = mid < 0.22 ? 'start' : mid > 0.78 ? 'end' : 'center';
    return [{
      field,
      x: align === 'start' ? Math.min(...xs) - 0.03 : align === 'end' ? Math.max(...xs) + 0.03 : mid,
      y: Math.min(...ys) - 0.075,
      count: own.length,
      align,
    }];
  }), []);

  // With many fields, island labels can collide. Keep the labels of the focused fields and of
  // bigger clusters first, and hide any label that would overlap one already placed.
  useLayoutEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const place = () => {
      const box = map.getBoundingClientRect();
      const labels = [...map.querySelectorAll<HTMLElement>('.paper-island')];
      labels.forEach((l) => l.removeAttribute('data-hidden'));
      const rank = (l: HTMLElement) => (l.dataset.dim ? 0 : 1000) + Number(l.dataset.count);
      const kept: DOMRect[] = [];
      for (const l of labels.sort((a, b) => rank(b) - rank(a))) {
        const r = l.getBoundingClientRect();
        const outside = r.left < box.left + 4 || r.right > box.right - 4 || r.top < box.top + 2;
        const hit = kept.some((k) => r.left < k.right + 6 && r.right > k.left - 6 && r.top < k.bottom + 2 && r.bottom > k.top - 2);
        if (outside || hit) l.setAttribute('data-hidden', 'true');
        else kept.push(r);
      }
    };
    place();
    const ro = new ResizeObserver(place);
    ro.observe(map);
    return () => ro.disconnect();
  }, [focus.area, focus.field]);

  const show = useCallback((id: string) => {
    window.clearTimeout(hideTimer.current);
    setActive(id);
  }, []);
  const hide = useCallback(() => {
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setActive(null), 90);
  }, []);

  // Tapping empty map space or pressing Escape clears the selection.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    const onDown = (e: PointerEvent) => {
      if (!mapRef.current?.contains(e.target as Node) || !(e.target as HTMLElement).closest('.paper-node')) {
        if (e.pointerType !== 'mouse') setActive(null);
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
      window.clearTimeout(hideTimer.current);
    };
  }, []);

  const onNodeClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    // On touch screens there is no hover: the first tap shows the card, the second opens the paper.
    if (lastPointer.current !== 'mouse' && active !== id) {
      e.preventDefault();
      show(id);
    }
  };

  const previewProps = (sel: Selection) => ({
    onMouseEnter: () => setPreview(sel),
    onMouseLeave: () => setPreview(null),
    onFocus: () => setPreview(sel),
    onBlur: () => setPreview(null),
  });

  const current = papers.find((p) => p.id === active) ?? null;
  const touch = lastPointer.current !== 'mouse';
  const openArea = areas.find((a) => a.key === selected.area);
  const subFields = openArea ? openArea.fields.filter((f) => tagCount(f) > 0) : [];
  const sections = buildSections(selected, lang);

  return (
    <div className="paper-map-block">
      <div
        ref={mapRef}
        className="paper-map"
        role="group"
        aria-label={study.mapLabel[lang]}
        data-active={current ? 'true' : undefined}
      >
        <span className="paper-map__axis paper-map__axis--x" aria-hidden="true">t-SNE 1</span>
        <span className="paper-map__axis paper-map__axis--y" aria-hidden="true">t-SNE 2</span>

        {papers.map((p) => (
          <span
            key={`t-${p.id}`}
            className="paper-territory"
            aria-hidden="true"
            data-dim={filtering && !fieldMatches(p.fields[0], focus) ? 'true' : undefined}
            style={{ left: pct(px(p.x)), top: pct(py(p.y)), '--c': fieldColor[p.fields[0]] } as CSSProperties}
          />
        ))}

        {islands.map((i) => (
          <span
            key={i.field}
            className="paper-island"
            aria-hidden="true"
            data-count={i.count}
            data-align={i.align}
            data-dim={filtering && !fieldMatches(i.field, focus) ? 'true' : undefined}
            style={{ left: pct(i.x), top: pct(i.y), '--c': fieldColor[i.field] } as CSSProperties}
          >
            {i.field}
          </span>
        ))}

        {papers.map((p) => (
          <a
            key={p.id}
            className="paper-node"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            data-active={active === p.id ? 'true' : undefined}
            data-dim={filtering && !paperMatches(p, focus) ? 'true' : undefined}
            aria-label={`${p.title}. ${p.fields.join(', ')}. ${p.venue}.`}
            aria-describedby={active === p.id ? 'paper-tip' : undefined}
            style={{ left: pct(px(p.x)), top: pct(py(p.y)), '--c': fieldColor[p.fields[0]] } as CSSProperties}
            onPointerDown={(e) => { lastPointer.current = e.pointerType; }}
            onMouseEnter={() => { if (lastPointer.current === 'mouse') show(p.id); }}
            onMouseLeave={() => { if (lastPointer.current === 'mouse') hide(); }}
            onFocus={() => show(p.id)}
            onBlur={hide}
            onClick={(e) => onNodeClick(e, p.id)}
          >
            <span className="paper-node__dot" aria-hidden="true" />
          </a>
        ))}

        {current ? <PaperTip paper={current} touch={touch} /> : null}
      </div>

      <p className="study-hint">{study.hint[lang]}</p>

      <div className="paper-filter">
        <div className="paper-fields paper-fields--areas" role="group" aria-label={study.legendLabel[lang]}>
          <button
            type="button"
            className="paper-fields__all"
            aria-pressed={!selected.area}
            aria-controls="paper-list"
            onClick={() => setSelected(ALL)}
          >
            {study.allLabel[lang]}
            <span className="paper-fields__count">{papers.length}</span>
          </button>
          {areas.map((a) => (
            <button
              key={a.key}
              type="button"
              style={{ '--c': areaColor[a.key] } as CSSProperties}
              aria-pressed={selected.area === a.key}
              aria-expanded={selected.area === a.key}
              aria-controls="paper-list"
              {...previewProps({ area: a.key, field: null })}
              onClick={() => setSelected({ area: a.key, field: null })}
            >
              <span className="paper-fields__swatch" aria-hidden="true">
                {a.fields.filter((f) => tagCount(f) > 0).map((f) => (
                  <span key={f} style={{ background: fieldColor[f] }} />
                ))}
              </span>
              {a.name}
              <span className="paper-fields__count">{areaCount(a.key)}</span>
            </button>
          ))}
        </div>

        {openArea && subFields.length > 1 ? (
          <div className="paper-fields paper-fields--sub" role="group" aria-label={`${openArea.name}: ${study.fieldsLabel[lang]}`}>
            <button
              type="button"
              className="paper-fields__all"
              style={{ '--c': areaColor[openArea.key] } as CSSProperties}
              aria-pressed={!selected.field}
              aria-controls="paper-list"
              onClick={() => setSelected({ area: openArea.key, field: null })}
            >
              {study.allInArea[lang]}
            </button>
            {subFields.map((f) => (
              <button
                key={f}
                type="button"
                style={{ '--c': fieldColor[f] } as CSSProperties}
                aria-pressed={selected.field === f}
                aria-controls="paper-list"
                {...previewProps({ area: openArea.key, field: f })}
                onClick={() => setSelected({ area: openArea.key, field: f })}
              >
                <span className="paper-fields__dot" aria-hidden="true" />
                {f}
                <span className="paper-fields__count">{tagCount(f)}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div id="paper-list" className="paper-list" aria-live="polite">
        {sections.map((sec) => (
          <section key={sec.key} className="paper-list__section">
            {sec.heading ? (
              <h2 style={{ '--c': sec.heading.color } as CSSProperties}>{sec.heading.title}</h2>
            ) : null}
            {sec.groups.map((g) => (
              <div key={g.key} className="paper-list__group" data-also={g.also ? 'true' : undefined} style={{ '--c': g.color } as CSSProperties}>
                <h3>{g.title}</h3>
                <ul>
                  {g.papers.map((p) => (
                    <li key={p.id}>
                      <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                      <p className="paper-list__venue">{p.venue}</p>
                      <p className="paper-list__summary">{p.summary[lang]}</p>
                      <p className="paper-tags">
                        {p.fields.map((f) => (
                          <span key={f} style={{ '--c': fieldColor[f] } as CSSProperties}>{f}</span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

// Everything inside the map stays in English on both language versions of the page.
function PaperTip({ paper, touch }: { paper: Paper; touch: boolean }) {
  const x = px(paper.x);
  const y = py(paper.y);
  const style = {
    left: pct(x),
    top: pct(y),
    '--c': fieldColor[paper.fields[0]],
  } as CSSProperties;

  return (
    <div
      id="paper-tip"
      className="paper-tip"
      role="tooltip"
      data-side={x > 0.55 ? 'left' : 'right'}
      data-vert={y > 0.55 ? 'up' : 'down'}
      style={style}
    >
      <p className="paper-tags">
        {paper.fields.map((f) => (
          <span key={f} style={{ '--c': fieldColor[f] } as CSSProperties}>{f}</span>
        ))}
      </p>
      <p className="paper-tip__title">{paper.title}</p>
      <p className="paper-tip__venue">{paper.venue}</p>
      <p className="paper-tip__summary">{paper.summary.en}</p>
      <p className="paper-tip__open">
        {touch ? 'Tap again to open on' : 'Click to open on'} {sourceName(paper.url)}
      </p>
    </div>
  );
}
