import type { Metadata } from 'next';
import { Resume } from '@/components/Resume';

export const metadata: Metadata = {
  title: '이력서',
  alternates: { canonical: '/ko/resume/', languages: { en: '/resume/', ko: '/ko/resume/' } },
};

export default function Page() {
  return <Resume lang="ko" />;
}
