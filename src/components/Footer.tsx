import { profile, ui, type Lang } from '@/content/site';

export function Footer({ lang, tone = 'foam' }: { lang: Lang; tone?: 'foam' | 'ocean' }) {
  return (
    <footer className={tone === 'ocean' ? 'site-footer site-footer--ocean' : 'site-footer'}>
      <div className="wrap">
        <div className="site-footer__inner">
          <p>© {new Date().getFullYear()} {profile.name[lang]}</p>
          <ul className="site-footer__links">
            <li><a href={`mailto:${profile.email}`}>{ui.email[lang]}</a></li>
            <li><a href={profile.github}>GitHub</a></li>
            {profile.linkedin ? <li><a href={profile.linkedin}>LinkedIn</a></li> : null}
          </ul>
        </div>
      </div>
    </footer>
  );
}
