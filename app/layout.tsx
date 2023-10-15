import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SidePanel from "@/components/SidePanel";
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
  title: "Of!True Portfolio",
  description:
    "Of!True is the professional portfolio reflecting the endeavours of an adventurous programmer",
  applicationName: "Professional Portfolio",
  authors: {
    name: "Of!True",
    url: "https://www.linkedin.com/in/nicolaas-defaux/ ",
  },
  generator: "professional, portfolio, software, engineer, nextjs, reactjs",
  viewport: { width: "device-width", initialScale: 1.0 },
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="view">
        <SidePanel/>
        <Navbar/>
        {children}
        </div>
      </body>
    </html>
  );
}
