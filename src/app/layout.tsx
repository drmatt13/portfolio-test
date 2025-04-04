import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// context
import ModalLayout from "@/layouts/ModalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matt's Projects",
  description: "A collection of projects by Matt",
  openGraph: {
    images: "/thumbnail.png",
    title: "Matt's Projects",
    description: "A collection of projects by Matt",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex justify-center /bg-black/50"`}
      >
        <div className="pointer-events-none hidden opacity-0">
          <div className="text-base md:text-lg" />
        </div>
        <ModalLayout>
          <div className="w-screen h-dvh overflow-y-scroll flex flex-col items-center">
            <div className="w-full flex justify-center">
              <Navbar />
            </div>
            <div className="md:w-[48rem] pb-8">{children}</div>
          </div>
        </ModalLayout>
      </body>
    </html>
  );
}
