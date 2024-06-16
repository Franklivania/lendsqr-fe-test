import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Lendsqr Frontend Assessment",
  description: "An application written for the lendsqr frontend assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
