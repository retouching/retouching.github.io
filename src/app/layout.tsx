import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "@/styles/main.css";
import { cn } from "@/lib/utils";

const font = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "[retouching]",
  description: "hi, I'm retouching, a freelance web developper",
  openGraph: {
    title: "[retouching]",
    description: "hi, I'm retouching, a freelance web developper",
  },
  twitter: {
    title: "[retouching]",
    description: "hi, I'm retouching, a freelance web developper",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        font.variable
      )}>
        {children}
      </body>
    </html>
  );
}

