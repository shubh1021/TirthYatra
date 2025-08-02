import { Lato, Tiro_Devanagari_Sanskrit } from 'next/font/google';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const tiro_devanagari_sanskrit = Tiro_Devanagari_Sanskrit({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-tiro-devanagari-sanskrit',
  display: 'swap',
});
