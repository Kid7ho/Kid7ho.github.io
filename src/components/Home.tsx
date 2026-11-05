import { Fragment } from 'react';
import Link from 'next/link';
import { awards, experience, featured, profile, ui, type Lang } from '@/content/site';
import { Footer } from './Footer';
import { Portrait } from './Portrait';
import { Wave } from './Wave';

export function Home({ lang }: { lang: Lang }) {
  const prefix = lang === 'ko' ? '/ko' : '';
  return (
    <>
      <main id="main">
        <section className="hero">
          <div className="wrap hero__grid">
            <Portrait lang={lang} />
            <div>
              <h1>{profile.name[lang]}</h1>
              <dl className="hero__positions">
                {profile.positions.map((item) => (
                  <Fragment key={item.org.en}>
                    <dt>{item.role[lang]}</dt>
                    <dd>{item.org[lang]}</dd>
                  </Fragment>
                ))}
              </dl>
              <p className="hero__email">
                {ui.email[lang]}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <div className="hero__actions">
                <Link className="button" href={`${prefix}/resume/`}>{ui.openResume[lang]}</Link>
                <a className="text-link" href={profile.github}>GitHub</a>
                {profile.linkedin ? <a className="text-link" href={profile.linkedin}>LinkedIn</a> : null}
              </div>
            </div>
          </div>
        </section>

        <section className="greeting" aria-labelledby="greeting-title">
          <div className="wrap">
            <div className="greeting__body">
              <h2 id="greeting-title">{profile.greeting.hello[lang]}</h2>
              {profile.greeting.paragraphs.map((paragraph) => (
                <p key={paragraph.en}>
                  {paragraph[lang].split(/\[(.+?)\]/).map((part, index) =>
                    index % 2 ? <Link key={part} href={`${prefix}/projects/${featured.slug}/`}>{part}</Link> : part,
                  )}
                </p>
              ))}
            </div>
          </div>
        </section>

        <Wave from="var(--foam)" to="var(--shallow)" />

        <section className="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <h2 id="experience-title">{ui.experience[lang]}</h2>
            <ol className="sounding">
              {experience.map((item) => (
                <li key={item.period.en + item.org.en}>
                  <span className="sounding__logo" aria-hidden="true">
                    {item.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.logo} alt="" width={48} height={48} loading="lazy" />
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l7.5 2.8v5.7c0 4.6-3.1 7.9-7.5 9.5-4.4-1.6-7.5-4.9-7.5-9.5V5.8z" />
                      </svg>
                    )}
                  </span>
                  <p className="sounding__period">{item.period[lang]}</p>
                  <div>
                    <h3>{item.role[lang]}</h3>
                    <p className="sounding__org">{item.org[lang]}</p>
                    {item.note ? <p>{item.note[lang]}</p> : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Wave from="var(--shallow)" to="var(--ocean)" />

        <section className="awards" aria-labelledby="awards-title">
          <div className="wrap">
            <h2 id="awards-title">{ui.recognition[lang]}</h2>
            <ul>
              {awards.map((item) => (
                <li key={item.title.en}>
                  <p className="awards__date">{item.date[lang]}</p>
                  <div>
                    <h3>{item.title[lang]}</h3>
                    {item.note[lang] ? <p>{item.note[lang]}</p> : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer lang={lang} from="var(--ocean)" />
    </>
  );
}
