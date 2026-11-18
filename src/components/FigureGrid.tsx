import type { CSSProperties } from 'react';
import type { Figure } from '@/content/posts';
import type { Lang } from '@/content/site';

// With zoom, each image links to the full-size file so dense images such as card news stay readable.
// With aspect, every image is cropped to the same ratio (focus sets which part stays visible) so mixed photos line up.
export function FigureGrid({ figures, columns = 1, lang, zoom = false, aspect }: { figures: Figure[]; columns?: number; lang: Lang; zoom?: boolean; aspect?: string }) {
  return (
    <div className="figures" data-columns={columns} data-aspect={aspect ? 'true' : undefined} style={{ '--columns': columns, '--aspect': aspect } as CSSProperties}>
      {figures.map((figure) => (
        <figure key={figure.src}>
          {zoom ? (
            <a className="figures__zoom" href={figure.src} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={figure.src} alt={figure.alt[lang]} loading="lazy" style={figure.focus ? { objectPosition: figure.focus } : undefined} />
            </a>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={figure.src} alt={figure.alt[lang]} loading="lazy" style={figure.focus ? { objectPosition: figure.focus } : undefined} />
          )}
          {figure.caption ? <figcaption>{figure.caption[lang]}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
