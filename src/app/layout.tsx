import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Libre_Baskerville, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const libre = Libre_Baskerville({ subsets: ['latin'], variable: '--font-libre', weight: ['400', '700'], display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: 'website',
    images: ['/og-image.svg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${libre.variable} ${mono.variable}`}>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-black">
          Skip to content
        </a>
        <div className="grain min-h-screen">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
