import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter_Tight } from 'next/font/google';
import "./globals.css";

const inter = Inter_Tight({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
