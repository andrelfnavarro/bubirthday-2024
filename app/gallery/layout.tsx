import type { Metadata } from 'next';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../assets/pilowlava-regular.woff2' });

export const metadata: Metadata = {
  title: 'Happy B-day! 🎉🎂🎈',
  description: 'A birthday celebration for the ages!',
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
