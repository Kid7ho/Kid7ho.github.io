'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile, ui, type Lang } from '@/content/site';

const tabs = [
  { key: 'home', path: '/' },
  { key: 'research', path: '/research/' },
  { key: 'projects', path: '/projects/' },
  { key: 'resume', path: '/resume/' },
] as const;

const withLang = (lang: Lang, path: string) => (lang === 'ko' ? `/ko${path}` : path);

export function Header({ lang }: { lang: Lang }) {
  const raw = usePathname() ?? '/';
  const pathname = raw.endsWith('/') ? raw : `${raw}/`;
  const base = pathname.replace(/^\/ko(?=\/)/, '') || '/';

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">{ui.skip[lang]}</a>
      <div className="site-header__inner">
        <Link className="site-name" href={withLang(lang, '/')}>{profile.name[lang]}</Link>
        <nav className="site-nav" aria-label={ui.menuLabel[lang]}>
          {tabs.map(({ key, path }) => {
            const active = path === '/' ? base === '/' : base.startsWith(path);
            return (
              <Link key={key} href={withLang(lang, path)} aria-current={active ? 'page' : undefined}>
                {ui.nav[key][lang]}
              </Link>
            );
          })}
        </nav>
        <div className="lang-switch" role="group" aria-label={ui.langLabel[lang]}>
          <Link href={base} lang="en" hrefLang="en" aria-current={lang === 'en' ? 'true' : undefined}>EN</Link>
          <Link href={withLang('ko', base)} lang="ko" hrefLang="ko" aria-current={lang === 'ko' ? 'true' : undefined}>한</Link>
        </div>
      </div>
    </header>
  );
}
