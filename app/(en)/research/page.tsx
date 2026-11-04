import type { Metadata } from 'next';
import { Research } from '@/components/Research';

export const metadata: Metadata = {
  title: 'Research',
  alternates: { canonical: '/research/', languages: { en: '/research/', ko: '/ko/research/' } },
};

export default function Page() {
  return <Research lang="en" />;
}
