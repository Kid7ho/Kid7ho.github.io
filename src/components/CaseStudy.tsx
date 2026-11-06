import Link from 'next/link';
import { caseStudy, featured, ui, type Lang } from '@/content/site';
import { FigureGrid } from './FigureGrid';
import { Footer } from './Footer';

export function CaseStudy({ lang }: { lang: Lang }) {
  const prefix = lang === 'ko' ? '/ko' : '';
  return (
    <>
      <main id="main" className="page">
        <div className="wrap wrap--text">
          <p className="back-link"><Link className="text-link" href={`${prefix}/projects/`}>{ui.backToProjects[lang]}</Link></p>
          <h1>{caseStudy.title[lang]}</h1>
          <p className="page__lead">{caseStudy.lead[lang]}</p>
          <p className="project__links">
            {featured.links.map((link) => <a key={link.href} href={link.href}>{link.label[lang]}</a>)}
          </p>

          {caseStudy.sections.map((section) => (
            <section key={section.heading.en}>
              <h2>{section.heading[lang]}</h2>
              <p>{section.body[lang]}</p>
            </section>
          ))}

          <section>
            <h2>{caseStudy.howItWorks.heading[lang]}</h2>
            <FigureGrid figures={caseStudy.howItWorks.figures} columns={4} lang={lang} />
          </section>

          <section>
            <h2>{caseStudy.verdictHeading[lang]}</h2>
            <ul className="verdicts">
              {caseStudy.verdicts.map((verdict) => (
                <li key={verdict.en} data-tone={verdict.tone}>{verdict[lang]}</li>
              ))}
            </ul>
            <p>{caseStudy.verdictNote[lang]}</p>
          </section>

          <section>
            <h2>{caseStudy.roleHeading[lang]}</h2>
            <p>{caseStudy.role[lang]}</p>
          </section>

          <section>
            <h2>{caseStudy.resultsHeading[lang]}</h2>
            <ul className="plain-list">
              {caseStudy.results.map((item) => <li key={item.en}>{item[lang]}</li>)}
            </ul>
            <p className="meta">{caseStudy.status[lang]}</p>
          </section>

          <section>
            <h2>{caseStudy.stackHeading[lang]}</h2>
            <p>{caseStudy.stack[lang]}</p>
          </section>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
