import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Freeflow Taekwondo",
  description:
    "A safe, family-friendly place for all ages to learn the Korean art of Self Defence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
          lang="en"
          className={`${geist.variable} ${geistMono.variable} h-full antialiased typeset typeset-docs`}
          suppressHydrationWarning
      >
          <body className="min-h-full flex flex-col">
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                  {children}
              </ThemeProvider>
          </body>
      </html>
  );
}
