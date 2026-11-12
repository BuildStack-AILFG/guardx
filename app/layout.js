import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatButton from '@/components/ChatButton';
import { COMPANY } from '@/lib/site';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

export const metadata = {
  title: { default: `${COMPANY.short} | Security services, staffing & background verification`, template: `%s | ${COMPANY.short}` },
  description:
    'GuardX Staffing and Security Solutions Private Limited — manned guarding, electronic security, staffing and background verification with clients across India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
