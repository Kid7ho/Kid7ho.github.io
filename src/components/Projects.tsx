import Link from 'next/link';
import { projects, projectsPage, ui, type Lang, type Project } from '@/content/site';
import { Footer } from './Footer';
import { Wave } from './Wave';

function ProjectLinks({ project, lang }: { project: Project; lang: Lang }) {
  if (!project.links.length) return null;
  return (
    <p className="project__links">
      {project.links.map((link) => <a key={link.href} href={link.href}>{link.label[lang]}</a>)}
    </p>
  );
}

export function Projects({ lang }: { lang: Lang }) {
  const prefix = lang === 'ko' ? '/ko' : '';
  const latest = projects.find((project) => project.isNew) ?? projects[0];
  const others = projects.filter((project) => project !== latest);
  return (
    <>
      <main id="main">
        <div className="page page--tight">
          <div className="wrap">
            <h1>{projectsPage.title[lang]}</h1>
            <p className="page__lead">{projectsPage.lead[lang]}</p>
          </div>
        </div>
        <Wave from="var(--foam)" to="var(--ocean)" />
        <section className="featured">
          <div className="wrap">
            <p className="featured__period">{latest.period[lang]}</p>
            <h2>
              {latest.title[lang]}
              {latest.isNew ? <span className="badge-new">{ui.newBadge}</span> : null}
            </h2>
            <p className="featured__summary">{latest.summary[lang]}</p>
            <p>{latest.role[lang]}</p>
            <p className="featured__stack">{latest.stack}</p>
            <div className="featured__actions">
              <Link className="button button--light" href={`${prefix}/projects/${latest.slug}/`}>{ui.viewProject[lang]}</Link>
              {latest.links.map((link) => <a className="text-link" key={link.href} href={link.href}>{link.label[lang]}</a>)}
            </div>
          </div>
        </section>
        <Wave from="var(--ocean)" to="var(--foam)" />
        <section className="project-list-section">
          <div className="wrap">
            <ol className="project-list">
              {others.map((project) => (
                <li key={project.title.en}>
                  <p className="project-list__period">{project.period[lang]}</p>
                  <div>
                    <h2>{project.title[lang]}</h2>
                    <p>{project.summary[lang]}</p>
                    <p className="meta">{projectsPage.roleLabel[lang]}: {project.role[lang]}</p>
                    <p className="meta">{project.stack}</p>
                    <div className="project__actions">
                      <Link className="button button--small" href={`${prefix}/projects/${project.slug}/`}>{ui.viewProject[lang]}</Link>
                      <ProjectLinks project={project} lang={lang} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer lang={lang} from="var(--foam)" />
    </>
  );
}
