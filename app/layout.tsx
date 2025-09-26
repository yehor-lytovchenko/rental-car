import Header from "@/components/Header/Header";
import "./globals.css";
import React from "react";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
        ;
      </body>
    </html>
  );
}
