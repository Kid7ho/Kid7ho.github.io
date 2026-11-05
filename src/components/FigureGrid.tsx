import type { CSSProperties } from 'react';
import type { Figure } from '@/content/posts';
import type { Lang } from '@/content/site';

export function FigureGrid({ figures, columns = 1, lang }: { figures: Figure[]; columns?: number; lang: Lang }) {
  return (
    <div className="figures" data-columns={columns} style={{ '--columns': columns } as CSSProperties}>
      {figures.map((figure) => (
        <figure key={figure.src}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={figure.src} alt={figure.alt[lang]} loading="lazy" />
          {figure.caption ? <figcaption>{figure.caption[lang]}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
