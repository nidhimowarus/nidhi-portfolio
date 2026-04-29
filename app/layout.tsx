import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* 🔥 FIXED METADATA */
export const metadata: Metadata = {
  title: "Nidhi Mowar | Senior .NET Technical Manager",
  description:
    "Portfolio of Nidhi Mowar – Senior .NET Technical Manager leading large-scale modernization programs, transforming legacy systems into scalable .NET and cloud-based platforms",
  keywords: [
    "Nidhi Mowar",
    "Generative AI Engineer",
    "RAG",
    "Azure OpenAI",
    ".Net",
  ],
  authors: [{ name: "Nidhi Mowar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}