import type { Metadata } from 'next';
import { Resume } from '@/components/Resume';

export const metadata: Metadata = {
  title: 'Resume',
  alternates: { canonical: '/resume/', languages: { en: '/resume/', ko: '/ko/resume/' } },
};

export default function Page() {
  return <Resume lang="en" />;
}
