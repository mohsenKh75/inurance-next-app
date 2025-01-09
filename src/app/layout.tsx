import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AzKi.com",
  description: "dummy version",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100 h-full" dir="rtl">
      <body
        className={`${inter.className} bg-contain h-full bg-no-repeat bg-bottom`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
