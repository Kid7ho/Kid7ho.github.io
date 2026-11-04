import type { Metadata } from 'next';
import { Research } from '@/components/Research';

export const metadata: Metadata = {
  title: '연구',
  alternates: { canonical: '/ko/research/', languages: { en: '/research/', ko: '/ko/research/' } },
};

export default function Page() {
  return <Research lang="ko" />;
}
