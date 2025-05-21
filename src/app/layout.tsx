import type { Metadata } from 'next';

import './globals.scss';
import { Header } from '../components/header';

export const metadata: Metadata = {
  title: 'DevMotors - your specialized workshop ',
  description: "Car's office in Madrid",
  keywords: ['car', 'workshop', 'madrid', 'devmotors', 'car maintenance'],
  openGraph: {
    title: 'DevMotors - your specialized workshop ',
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <p
          style={{
            textAlign: 'center',
            marginTop: '54px',
            marginBottom: '24px',
          }}
        >
          All rights reserved @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
