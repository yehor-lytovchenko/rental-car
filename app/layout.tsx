import Header from "@/components/Header/Header";
import "./globals.css";
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
