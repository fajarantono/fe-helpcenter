import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Header, ThemeProvider } from '@/components';
import { siteConfig } from '@/config';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
   themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://acme.com'),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.image,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-[calc(80vh-64px)]">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
