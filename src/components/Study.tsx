import { study, type Lang } from '@/content/site';
import { Footer } from './Footer';
import { PaperMap } from './PaperMap';

export function Study({ lang }: { lang: Lang }) {
  return (
    <>
      <main id="main" className="page page--study">
        <div className="wrap">
          <h1 className="study-title">{study.title[lang]}</h1>
          <PaperMap lang={lang} />
          <p className="meta study-method">{study.method[lang]}</p>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
