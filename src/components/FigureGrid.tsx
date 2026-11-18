import type { CSSProperties } from 'react';
import type { Figure } from '@/content/posts';
import type { Lang } from '@/content/site';

// With zoom, each image links to the full-size file so dense images such as card news stay readable.
export function FigureGrid({ figures, columns = 1, lang, zoom = false }: { figures: Figure[]; columns?: number; lang: Lang; zoom?: boolean }) {
  return (
    <div className="figures" data-columns={columns} style={{ '--columns': columns } as CSSProperties}>
      {figures.map((figure) => (
        <figure key={figure.src}>
          {zoom ? (
            <a className="figures__zoom" href={figure.src} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={figure.src} alt={figure.alt[lang]} loading="lazy" />
            </a>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={figure.src} alt={figure.alt[lang]} loading="lazy" />
          )}
          {figure.caption ? <figcaption>{figure.caption[lang]}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
