import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-monrope' });

export const metadata: Metadata = {
  title: 'Audiophile Demo Ecommerce Website',
  description: 'Created from figma disign to show and test front-end skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
