import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';
import { lato, tiro_devanagari_sanskrit } from './fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'TirthYatra - Your Spiritual Journey Starts Here',
  description: 'Curated divine experiences for global explorers in India.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(lato.variable, tiro_devanagari_sanskrit.variable)}>
      <head />
      <body className="font-body antialiased">
        <Header />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
