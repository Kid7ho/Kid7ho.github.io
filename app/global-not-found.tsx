import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import '@/styles.css';

export const metadata = { title: 'Page not found | Jin Myoung Hyun' };

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="page">
          <div className="wrap">
            <h1>Page not found</h1>
            <p className="page__lead">This page doesn’t exist. 찾으시는 페이지가 없습니다.</p>
            <div className="hero__actions">
              <a className="button" href="/">Go to home</a>
              <a className="text-link" href="/ko/">홈으로 이동</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
