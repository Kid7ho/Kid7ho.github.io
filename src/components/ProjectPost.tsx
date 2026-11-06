import Link from 'next/link';
import { findPost, games, type PostSection } from '@/content/posts';
import { projects, projectsPage, ui, type Lang } from '@/content/site';
import { FigureGrid } from './FigureGrid';
import { Footer } from './Footer';

function Section({ section, lang }: { section: PostSection; lang: Lang }) {
  return (
    <section>
      <h2>{section.heading[lang]}</h2>
      {section.body?.map((paragraph) => <p key={paragraph.en}>{paragraph[lang]}</p>)}
      {section.list ? (
        <ul className="plain-list">
          {section.list.map((item) => <li key={item.en}>{item[lang]}</li>)}
        </ul>
      ) : null}
      {section.figures ? <FigureGrid figures={section.figures} columns={section.columns} lang={lang} /> : null}
    </section>
  );
}

function GameList({ lang }: { lang: Lang }) {
  return (
    <ol className="game-list">
      {games.map((game) => (
        <li key={game.title.en}>
          {game.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={game.image} alt="" width={640} height={400} loading="lazy" />
          ) : (
            <span className="game-list__blank" aria-hidden="true">{game.title.en}</span>
          )}
          <div>
            <p className="game-list__period">{game.period[lang]}</p>
            <h2>{game.title[lang]}</h2>
            <p>{game.summary[lang]}</p>
            {game.links ? (
              <p className="project__links">
                {game.links.map((link) => <a key={link.href} href={link.href}>{link.label[lang]}</a>)}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ProjectPost({ slug, lang }: { slug: string; lang: Lang }) {
  const prefix = lang === 'ko' ? '/ko' : '';
  const post = findPost(slug);
  const project = projects.find((item) => item.slug === slug);
  if (!post || !project) throw new Error(`Unknown project: ${slug}`);

  return (
    <>
      <main id="main" className="page">
        <div className="wrap wrap--text">
          <p className="back-link"><Link className="text-link" href={`${prefix}/projects/`}>{ui.backToProjects[lang]}</Link></p>
          <p className="post__period">{project.period[lang]}</p>
          <h1>{project.title[lang]}</h1>
          <p className="page__lead">{post.lead[lang]}</p>
          <dl className="post__facts">
            <dt>{projectsPage.roleLabel[lang]}</dt>
            <dd>{project.role[lang]}</dd>
            <dt>{projectsPage.stackLabel[lang]}</dt>
            <dd>{project.stack}</dd>
          </dl>
          {project.links.length ? (
            <p className="project__links">
              {project.links.map((link) => <a key={link.href} href={link.href}>{link.label[lang]}</a>)}
            </p>
          ) : null}

          {post.sections.map((section) => <Section key={section.heading.en} section={section} lang={lang} />)}
          {slug === 'unity-games' ? <GameList lang={lang} /> : null}
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
