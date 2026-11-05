import type { Metadata } from 'next';
import { ProjectPost } from '@/components/ProjectPost';
import { findPost, posts } from '@/content/posts';
import { projects } from '@/content/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.title.en,
    description: findPost(slug)?.lead.en,
    alternates: { canonical: `/projects/${slug}/`, languages: { en: `/projects/${slug}/`, ko: `/ko/projects/${slug}/` } },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectPost slug={slug} lang="en" />;
}
