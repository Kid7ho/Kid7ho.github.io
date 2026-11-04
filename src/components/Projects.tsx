import Link from 'next/link';
import { featured, projects, projectsPage, ui, type Lang, type Project } from '@/content/site';
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
            <p className="featured__period">{featured.period[lang]}</p>
            <h2>{featured.title[lang]}</h2>
            <p className="featured__summary">{featured.summary[lang]}</p>
            <p>{featured.role[lang]}</p>
            <p className="featured__stack">{featured.stack}</p>
            <div className="featured__actions">
              <Link className="button button--light" href={`${prefix}/projects/${featured.slug}/`}>{ui.viewProject[lang]}</Link>
              {featured.links.map((link) => <a className="text-link" key={link.href} href={link.href}>{link.label[lang]}</a>)}
            </div>
          </div>
        </section>
        <Wave from="var(--ocean)" to="var(--foam)" />
        <section className="project-list-section">
          <div className="wrap">
            <ol className="project-list">
              {projects.map((project) => (
                <li key={project.title.en}>
                  <p className="project-list__period">{project.period[lang]}</p>
                  <div>
                    <h2>{project.title[lang]}</h2>
                    <p>{project.summary[lang]}</p>
                    <p className="meta">{projectsPage.roleLabel[lang]}: {project.role[lang]}</p>
                    <p className="meta">{project.stack}</p>
                    <ProjectLinks project={project} lang={lang} />
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
