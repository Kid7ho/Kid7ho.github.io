import type { Metadata } from 'next';
import { Projects } from '@/components/Projects';

export const metadata: Metadata = {
  title: '프로젝트',
  alternates: { canonical: '/ko/projects/', languages: { en: '/projects/', ko: '/ko/projects/' } },
};

export default function Page() {
  return <Projects lang="ko" />;
}
