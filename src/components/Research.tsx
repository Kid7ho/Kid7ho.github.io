import { research, type Lang } from '@/content/site';
import { Footer } from './Footer';

export function Research({ lang }: { lang: Lang }) {
  return (
    <>
      <main id="main" className="page">
        <div className="wrap">
          <h1>{research.title[lang]}</h1>

          <section className="current">
            <h2>{research.current.heading[lang]}</h2>
            <p>{research.current.body[lang]}</p>
          </section>

          <section>
            <h2>{research.publicationsHeading[lang]}</h2>
            <ol className="publications">
              {research.publications.map((paper) => (
                <li key={paper.title.en}>
                  <p className="publications__date">{paper.date[lang]}</p>
                  <div>
                    <h3>
                      {paper.links?.length ? <a href={paper.links[0].href}>{paper.title[lang]}</a> : paper.title[lang]}
                    </h3>
                    <p>{paper.authors[lang]}</p>
                    <p className="publications__venue">{paper.venue[lang]}</p>
                    <p className="meta">{research.roleLabel[lang]}: {paper.role[lang]}</p>
                    {paper.links?.length ? (
                      <p className="project__links">
                        {paper.links.map((link) => <a key={link.href} href={link.href}>{link.label[lang]}</a>)}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
            <p className="meta">{research.note[lang]}</p>
          </section>

          <section>
            <h2>{research.interests.heading[lang]}</h2>
            <ul className="interest-list">
              {research.interests.items.map((item) => <li key={item.en}>{item[lang]}</li>)}
            </ul>
          </section>
        </div>
      </main>
      <Footer lang={lang} from="var(--foam)" />
    </>
  );
}
