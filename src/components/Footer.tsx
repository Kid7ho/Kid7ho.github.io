import { profile, ui, type Lang } from '@/content/site';
import { Wave } from './Wave';

export function Footer({ lang, from }: { lang: Lang; from: string }) {
  return (
    <>
      <Wave from={from} to="var(--abyss)" />
      <footer className="contact" id="contact">
        <div className="wrap">
          <h2>{ui.contact[lang]}</h2>
          <p className="contact__line">{ui.contactLine[lang]}</p>
          <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <ul className="contact__links">
            <li><a href={profile.github}>GitHub</a></li>
            {profile.linkedin ? <li><a href={profile.linkedin}>LinkedIn</a></li> : null}
          </ul>
        </div>
      </footer>
    </>
  );
}
