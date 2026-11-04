import Link from 'next/link';
import { awards, experience, profile, ui, type Lang } from '@/content/site';
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
            <div>
              <h1>{profile.name[lang]}</h1>
              <p className="hero__headline">{profile.headline[lang]}</p>
              <p className="hero__intro">{profile.intro[lang]}</p>
              <div className="hero__actions">
                <Link className="button" href={`${prefix}/resume/`}>{ui.openResume[lang]}</Link>
                <a className="text-link" href={profile.github}>GitHub</a>
                <a className="text-link" href={`mailto:${profile.email}`}>Email</a>
              </div>
            </div>
            <Portrait lang={lang} />
          </div>
        </section>

        <Wave from="var(--foam)" to="var(--shallow)" />

        <section className="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <h2 id="experience-title">{ui.experience[lang]}</h2>
            <ol className="sounding">
              {experience.map((item) => (
                <li key={item.period.en + item.org.en}>
                  <p className="sounding__period">{item.period[lang]}</p>
                  <div>
                    <h3>{item.role[lang]}</h3>
                    <p className="sounding__org">{item.org[lang]}</p>
                    <p>{item.note[lang]}</p>
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
