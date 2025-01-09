import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

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
      <body className="bg-contain h-full bg-no-repeat bg-bottom">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
