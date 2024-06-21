import type { Metadata } from "next";
import "./globals.scss";
import QueryProvider from "@/provider/QueryClientProvider";

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
      <QueryProvider>
        <body>{children}</body>
      </QueryProvider>
    </html>
  );
}
