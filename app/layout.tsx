import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import logo from "../public/logo.svg";
const monoSans = Mona_Sans({
  variable: "--font-mono-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrackWise",
  description: "Crack any interview wisely with personalized AI coaching.,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" type="image/svg+xml" href={logo} />
      <body className={`${monoSans.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
