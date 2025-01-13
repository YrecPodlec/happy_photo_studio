import type { Metadata } from "next";
import "./globals.css";
import Back from "@/app/components/shared/block/back";
import React from "react";
import {Footer} from "@/app/components/widgets";

export const metadata: Metadata = {
  title: "Фотостудия СЧАСТЬЕ",
  description: "Мы сохраняем вашу красоту навсегда, акцентируя внимание на каждом сияющем моменте жизни",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={'scroll-smooth'}>
      <body className={'font-sans tracking-widest'}>
        {children}
      <Back/>
      <Footer/>
      </body>
    </html>
  );
}
