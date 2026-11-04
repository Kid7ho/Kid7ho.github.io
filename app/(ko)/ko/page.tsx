import type { Metadata } from 'next';
import { Home } from '@/components/Home';

export const metadata: Metadata = {
  title: { absolute: '현진명' },
  alternates: { canonical: '/ko/', languages: { en: '/', ko: '/ko/' } },
};

export default function Page() {
  return <Home lang="ko" />;
}
