import type { Metadata } from 'next';
import { Study } from '@/components/Study';

export const metadata: Metadata = {
  title: 'Study',
  description: 'Paper Study Graph: a map of the papers Jin Myoung Hyun has read, grouped by field.',
  alternates: { canonical: '/study/', languages: { en: '/study/', ko: '/ko/study/' } },
};

export default function Page() {
  return <Study lang="en" />;
}
