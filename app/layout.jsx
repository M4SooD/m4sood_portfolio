import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

//Components

import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import { Header } from '@/components/Header';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Masood Moosavi – Frontend Developer',
  description:
    'I’m a passionate frontend developer specializing in building beautiful, fast, and responsive websites using React, Next.js, and modern web technologies.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'Portfolio',
    'Masood Moosavi',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
