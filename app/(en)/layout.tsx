import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import '@/styles.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://kid7ho.github.io'),
  title: { default: 'Jin Myoung Hyun', template: '%s | Jin Myoung Hyun' },
  description: 'Jin Myoung Hyun studies how AI systems remember, forget, and earn trust.',
  icons: { icon: '/icon.svg' },
  openGraph: { title: 'Jin Myoung Hyun', description: 'Jin Myoung Hyun studies how AI systems remember, forget, and earn trust.', type: 'website' },
};

export const viewport: Viewport = { themeColor: '#F3FBFD', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header lang="en" />
        {children}
      </body>
    </html>
  );
}
