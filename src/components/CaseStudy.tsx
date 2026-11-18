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

          <dl className="glance">
            {caseStudy.glance.map((item) => (
              <div key={item.label.en}>
                <dt>{item.label[lang]}</dt>
                <dd>{item.value[lang]}</dd>
              </div>
            ))}
          </dl>

          <section>
            <h2>{caseStudy.contest.heading[lang]}</h2>
            <p>{caseStudy.contest.body[lang]}</p>
          </section>

          <section>
            <h2>{caseStudy.timelineHeading[lang]}</h2>
            <ol className="timeline">
              {caseStudy.timeline.map((step) => (
                <li key={step.title.en} data-highlight={step.highlight ? 'true' : undefined}>
                  <p className="timeline__date">{step.date[lang]}</p>
                  <div>
                    <h3>{step.title[lang]}</h3>
                    <p>{step.body[lang]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2>{caseStudy.submission.heading[lang]}</h2>
            <p>{caseStudy.submission.note[lang]}</p>
            <FigureGrid figures={caseStudy.submission.figures} columns={3} lang={lang} zoom />
          </section>

          <section className="case-part">
            <h2>{caseStudy.serviceHeading[lang]}</h2>
            <p className="case-part__lead">{caseStudy.serviceLead[lang]}</p>
          </section>

          {caseStudy.sections.map((section) => (
            <section key={section.heading.en} className="case-sub">
              <h3>{section.heading[lang]}</h3>
              <p>{section.body[lang]}</p>
            </section>
          ))}

          <section className="case-sub">
            <h3>{caseStudy.howItWorks.heading[lang]}</h3>
            <FigureGrid figures={caseStudy.howItWorks.figures} columns={4} lang={lang} />
          </section>

          <section className="case-sub">
            <h3>{caseStudy.verdictHeading[lang]}</h3>
            <ul className="verdicts">
              {caseStudy.verdicts.map((verdict) => (
                <li key={verdict.en} data-tone={verdict.tone}>{verdict[lang]}</li>
              ))}
            </ul>
            <p>{caseStudy.verdictNote[lang]}</p>
          </section>

          <section className="case-sub">
            <h3>{caseStudy.resultsHeading[lang]}</h3>
            <ul className="plain-list">
              {caseStudy.results.map((item) => <li key={item.en}>{item[lang]}</li>)}
            </ul>
          </section>

          <section className="case-sub">
            <h3>{caseStudy.stackHeading[lang]}</h3>
            <p>{caseStudy.stack[lang]}</p>
          </section>

          <section>
            <h2>{caseStudy.fieldHeading[lang]}</h2>
            <p>{caseStudy.field[lang]}</p>
          </section>

          <section>
            <h2>{caseStudy.roleHeading[lang]}</h2>
            <p>{caseStudy.role[lang]}</p>
            <p className="meta">{caseStudy.status[lang]}</p>
          </section>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
