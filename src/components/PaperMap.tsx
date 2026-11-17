'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import { fieldColor, fieldOrder, papers, type Field, type Paper } from '@/content/papers';
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

export function PaperMap({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<string | null>(null);
  const [selected, setSelected] = useState<Field | 'all'>('all');
  const [preview, setPreview] = useState<Field | null>(null);
  const focusField = preview ?? (selected === 'all' ? null : selected);
  const lastPointer = useRef<string>('mouse');
  const hideTimer = useRef<number | undefined>(undefined);
  const mapRef = useRef<HTMLDivElement>(null);

  const islands = useMemo<Island[]>(() => fieldOrder.map((field) => {
    const own = papers.filter((p) => p.fields[0] === field);
    const xs = own.map((p) => px(p.x));
    const ys = own.map((p) => py(p.y));
    const mid = xs.reduce((a, b) => a + b, 0) / xs.length;
    // Labels near the left or right edge are anchored to the cluster's outer node so they stay inside the map.
    const align = mid < 0.22 ? 'start' : mid > 0.78 ? 'end' : 'center';
    return {
      field,
      x: align === 'start' ? Math.min(...xs) - 0.03 : align === 'end' ? Math.max(...xs) + 0.03 : mid,
      y: Math.min(...ys) - 0.075,
      count: own.length,
      align,
    };
  }), []);

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

  const current = papers.find((p) => p.id === active) ?? null;
  const touch = lastPointer.current !== 'mouse';

  return (
    <div className="paper-map-block">
      <div
        ref={mapRef}
        className="paper-map"
        role="group"
        aria-label={study.mapLabel[lang]}
        data-active={current ? 'true' : undefined}
        data-field={focusField ?? undefined}
      >
        <span className="paper-map__axis paper-map__axis--x" aria-hidden="true">t-SNE 1</span>
        <span className="paper-map__axis paper-map__axis--y" aria-hidden="true">t-SNE 2</span>

        {papers.map((p) => (
          <span
            key={`t-${p.id}`}
            className="paper-territory"
            aria-hidden="true"
            data-field={p.fields[0]}
            style={{ left: pct(px(p.x)), top: pct(py(p.y)), '--c': fieldColor[p.fields[0]] } as CSSProperties}
          />
        ))}

        {islands.map((i) => (
          <span
            key={i.field}
            className="paper-island"
            aria-hidden="true"
            data-field={i.field}
            data-align={i.align}
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
            data-field={p.fields[0]}
            data-active={active === p.id ? 'true' : undefined}
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

      <div className="paper-fields" role="group" aria-label={study.legendLabel[lang]}>
        <button
          type="button"
          className="paper-fields__all"
          aria-pressed={selected === 'all'}
          aria-controls="paper-list"
          onClick={() => setSelected('all')}
        >
          {study.allLabel[lang]}
          <span className="paper-fields__count">{papers.length}</span>
        </button>
        {fieldOrder.map((field) => (
          <button
            key={field}
            type="button"
            style={{ '--c': fieldColor[field] } as CSSProperties}
            aria-pressed={selected === field}
            aria-controls="paper-list"
            onMouseEnter={() => setPreview(field)}
            onMouseLeave={() => setPreview(null)}
            onFocus={() => setPreview(field)}
            onBlur={() => setPreview(null)}
            onClick={() => setSelected(field)}
          >
            <span className="paper-fields__dot" aria-hidden="true" />
            {field}
            <span className="paper-fields__count">{islands.find((i) => i.field === field)?.count}</span>
          </button>
        ))}
      </div>

      <div id="paper-list" className="paper-list" aria-live="polite">
        {(selected === 'all' ? fieldOrder : [selected]).map((field) => (
          <section key={field} className="paper-list__group" style={{ '--c': fieldColor[field] } as CSSProperties}>
            <h2>{field}</h2>
            <ul>
              {papers.filter((p) => p.fields[0] === field).map((p) => (
                <li key={p.id}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                  <p className="paper-list__venue">{p.venue}</p>
                  <p className="paper-list__summary">{p.summary[lang]}</p>
                </li>
              ))}
            </ul>
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
      <p className="paper-tip__fields">
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
