import type { Metadata } from 'next';
import { CaseStudy } from '@/components/CaseStudy';

export const metadata: Metadata = {
  title: 'AI 건강지킴이',
  alternates: { canonical: '/ko/projects/ai-health-guardian/', languages: { en: '/projects/ai-health-guardian/', ko: '/ko/projects/ai-health-guardian/' } },
};

export default function Page() {
  return <CaseStudy lang="ko" />;
}
