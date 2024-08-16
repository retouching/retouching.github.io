import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "@/styles/main.css";
import { cn } from "@/lib/utils";
import { CONFIG } from "@/config";

const font = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "retouching - Portfolio",
  description: "My personal portfolio",
  openGraph: {
    title: "retouching - Portfolio",
    description: "My personal portfolio",
    images: { url: CONFIG.AVATAR_URL },
  },
  twitter: {
    title: "retouching - Portfolio",
    description: "My personal portfolio",
    images: { url: CONFIG.AVATAR_URL },
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
    <html lang="fr" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        font.variable
      )}>
        {children}
      </body>
    </html>
  );
}

