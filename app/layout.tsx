import Header from "@/components/Header/Header";
import "./globals.css";
import React from "react";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Manrope } from "next/font/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const manrope = Manrope({
  variable: "--font-manrope",
  display: "swap",
  weight: ["700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
