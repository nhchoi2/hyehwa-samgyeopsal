import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Script from 'next/script';
import { site } from '@/config/site';
import { theme } from '@/config/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import './globals.css';

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: 'ko_KR',
    type: 'website',
    ...(site.url ? { url: site.url } : {}),
    ...(site.ogImage ? { images: [site.ogImage] } : {}),
  },
  robots: { index: Boolean(site.url), follow: Boolean(site.url) },
  verification: {
    ...(site.googleVerification ? { google: site.googleVerification } : {}),
    ...(site.naverVerification
      ? { other: { 'naver-site-verification': site.naverVerification } }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const colors = Object.fromEntries(
    Object.entries(theme).map(([key, value]) => [`--brand-${key}`, value]),
  ) as CSSProperties;
  const gaEnabled = /^G-[A-Z0-9]+$/.test(site.gaId);
  return (
    <html lang="ko" style={colors}>
      <body>
        <a href="#main-content" className="skip-link">
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingContact />
        {gaEnabled && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${site.gaId}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
