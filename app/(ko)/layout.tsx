import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import '@/styles.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://kid7ho.github.io'),
  title: { default: '현진명', template: '%s | 현진명' },
  description: '현진명은 AI가 무엇을 기억하고, 잊고, 믿을 수 있는지 연구합니다.',
  icons: { icon: '/icon.svg' },
  openGraph: { title: '현진명', description: '현진명은 AI가 무엇을 기억하고, 잊고, 믿을 수 있는지 연구합니다.', type: 'website' },
};

export const viewport: Viewport = { themeColor: '#F3FBFD', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header lang="ko" />
        {children}
      </body>
    </html>
  );
}
