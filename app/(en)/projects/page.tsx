import type { Metadata } from 'next';
import { Projects } from '@/components/Projects';

export const metadata: Metadata = {
  title: 'Projects',
  alternates: { canonical: '/projects/', languages: { en: '/projects/', ko: '/ko/projects/' } },
};

export default function Page() {
  return <Projects lang="en" />;
}
