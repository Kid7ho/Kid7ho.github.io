import { profile, type Lang } from '@/content/site';
import { Wave } from './Wave';

export function Footer({ lang, from }: { lang: Lang; from: string }) {
  return (
    <>
      <Wave from={from} to="var(--abyss)" />
      <footer className="site-footer">
        <div className="wrap site-footer__inner">
          <p className="site-footer__name">{profile.name[lang]}</p>
          <ul className="site-footer__links">
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.github}>GitHub</a></li>
            {profile.linkedin ? <li><a href={profile.linkedin}>LinkedIn</a></li> : null}
          </ul>
        </div>
      </footer>
    </>
  );
}
