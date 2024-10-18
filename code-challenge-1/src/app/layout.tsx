"use client";

import { useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
import Logo from "../public/images/logo.png";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}>
        <header className="bg-white text-gray-900 p-6">
          <div className="container mx-auto flex justify-between items-center">
            <Image
              src={Logo}
              alt="Logo"
              height={50}
            />
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            <nav className={`flex md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
              <Link href="/" className="mr-6">Home</Link>
              <Link href="/aboutUs" className="mr-6">About Us</Link>
              <Link href="/services" className="mr-6">Services</Link>
              <Link href="/teams">Teams</Link>
            </nav>
          </div>
          {isOpen && (
            <div className="flex flex-col mt-2 md:hidden">
              <Link href="/" className="p-2 border-b border-gray-700">Home</Link>
              <Link href="/aboutUs" className="p-2 border-b border-gray-700">About Us</Link>
              <Link href="/services" className="p-2 border-b border-gray-700">Services</Link>
              <Link href="/teams" className="p-2">Teams</Link>
            </div>
          )}
        </header>
        <main>{children}</main>
        <footer className="bg-black text-white text-center p-4">
          <p>© 2024 Mushroom Motorsports!. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
