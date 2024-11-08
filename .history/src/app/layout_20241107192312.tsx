import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`   ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <div className=" sm:hidden bg-white border flex justify-center py-3  fixed ">
          <Button className="bg-green-500">
            <span>w</span> Contacto
          </Button>
        </div>
        {/* <div className="absolute bg-red-400 bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <Button>Contacto</Button>
        </div> */}
      </body>
    </html>
  );
}
