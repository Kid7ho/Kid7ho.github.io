import { profile, type Lang } from '@/content/site';

export function Portrait({ lang }: { lang: Lang }) {
  return (
    <div className="porthole">
      {profile.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={profile.photo} alt={profile.name[lang]} width={320} height={320} />
      ) : (
        <span aria-hidden="true">{profile.monogram}</span>
      )}
    </div>
  );
}
