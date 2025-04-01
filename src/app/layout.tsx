import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import {Header} from '../components/header'


export const metadata: Metadata = {
  title: "DevMotors - your specialized workshop ",
  description: "Car's office in Madrid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
