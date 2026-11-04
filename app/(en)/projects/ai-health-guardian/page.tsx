import type { Metadata } from 'next';
import { CaseStudy } from '@/components/CaseStudy';

export const metadata: Metadata = {
  title: 'AI Health Guardian',
  alternates: { canonical: '/projects/ai-health-guardian/', languages: { en: '/projects/ai-health-guardian/', ko: '/ko/projects/ai-health-guardian/' } },
};

export default function Page() {
  return <CaseStudy lang="en" />;
}
