import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Automart",
  description:
    "Automotive marketplace for traders and suppliers",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}