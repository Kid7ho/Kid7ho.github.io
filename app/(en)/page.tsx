import type { Metadata } from 'next';
import { Home } from '@/components/Home';

export const metadata: Metadata = {
  title: { absolute: 'Jin Myoung Hyun' },
  alternates: { canonical: '/', languages: { en: '/', ko: '/ko/' } },
};

export default function Page() {
  return <Home lang="en" />;
}
