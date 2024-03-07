import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const myFont = localFont({ src: './assets/pilowlava-regular.woff2' });

export const metadata: Metadata = {
  title: 'Finally 24! 🎉🎂🎈',
  description: 'A birthday celebration for the ages!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
