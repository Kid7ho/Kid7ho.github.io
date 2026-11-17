import type { Metadata } from 'next';
import { Study } from '@/components/Study';

export const metadata: Metadata = {
  title: '스터디',
  description: 'Paper Study Graph: 현진명이 읽은 논문을 분야별로 배치한 지도.',
  alternates: { canonical: '/ko/study/', languages: { en: '/study/', ko: '/ko/study/' } },
};

export default function Page() {
  return <Study lang="ko" />;
}
