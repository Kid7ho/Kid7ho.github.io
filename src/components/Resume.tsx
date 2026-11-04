import { resumePage, type Lang } from '@/content/site';
import { Footer } from './Footer';

export function Resume({ lang }: { lang: Lang }) {
  const current = resumePage.files.find((file) => file.lang === lang) ?? resumePage.files[0];
  return (
    <>
      <main id="main" className="page">
        <div className="wrap">
          <h1>{resumePage.title[lang]}</h1>
          <p className="page__lead">{resumePage.lead[lang]}</p>
          <div className="hero__actions">
            {resumePage.files.map((file) => (
              <a key={file.href} className={file.lang === lang ? 'button' : 'text-link'} href={file.href} download>
                {file.label[lang]}
              </a>
            ))}
          </div>
          <a className="resume-preview" href={current.href}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.preview} alt={resumePage.previewTitle[lang]} width={992} height={1403} />
          </a>
        </div>
      </main>
      <Footer lang={lang} from="var(--foam)" />
    </>
  );
}
