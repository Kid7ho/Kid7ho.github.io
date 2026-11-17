import { fieldColor, fieldOrder, papers } from '@/content/papers';
import { study, type Lang } from '@/content/site';
import { Footer } from './Footer';
import { PaperMap } from './PaperMap';
import type { CSSProperties } from 'react';

export function Study({ lang }: { lang: Lang }) {
  return (
    <>
      <main id="main" className="page page--study">
        <div className="wrap">
          <h1>{study.title[lang]}</h1>
          <p className="page__lead">{study.lead[lang]}</p>
          <p className="study-meta">
            <span>{papers.length}{lang === 'en' ? ' ' : ''}{study.count[lang]}</span>
            <span>{study.updated[lang]}</span>
          </p>

          <PaperMap lang={lang} />
          <p className="study-hint">{study.hint[lang]}</p>
          <p className="meta study-method">{study.method[lang]}</p>

          <section className="paper-index">
            <h2>{study.listHeading[lang]}</h2>
            <div className="paper-index__groups">
              {fieldOrder.map((field) => (
                <div key={field} className="paper-index__group" style={{ '--c': fieldColor[field] } as CSSProperties}>
                  <h3>{field}</h3>
                  <ul>
                    {papers.filter((p) => p.fields[0] === field).map((p) => (
                      <li key={p.id}>
                        <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                        <span>{p.venue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
