import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { FluidBackground } from "@/components/ui/fluid-background";
import { LayoutWrapper } from "@/components/layout-wrapper";

export const metadata: Metadata = {
  title: "LuffyDesign - Building Products That Ship",
  description: "AI-powered applications, Web3 platforms, and full-stack products delivered with exceptional craft and technical clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">
        <FluidBackground />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
