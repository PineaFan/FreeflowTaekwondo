import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeartIcon, TriangleIcon } from "lucide-react";
import Navbar from "../components/navbar";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
})

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
})

const packages = [
    { name: "Next.js", href: "https://nextjs.org" },
    { name: "TypeScript", href: "https://www.typescriptlang.org" },
    { name: "React", href: "https://react.dev" },
    { name: "Tailwind CSS", href: "https://tailwindcss.com" },
    { name: "shadcn/ui", href: "https://ui.shadcn.com" },
    { name: "Lucide", href: "https://lucide.dev" }
];

export const metadata: Metadata = {
    title: "Freeflow Taekwondo",
    description:
        "A safe, family-friendly place for all ages to learn the Korean art of Self Defence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geist.variable} ${geistMono.variable} h-full antialiased typeset typeset-docs motion-safe:scroll-smooth scroll-pt-2`}
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
            <body className="flex min-h-full flex-col relative">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Navbar />

                    <div className="flex-1">{children}</div>

                    <footer className="mt-12 border-t-2 border-blue-500 bg-muted/40">
                        <div className="container mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
                            <div className="space-y-3">
                                <h2 className="text-lg font-semibold tracking-tight">Freeflow Taekwondo</h2>
                                <nav
                                    aria-label="Footer navigation"
                                    className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
                                >
                                    <Link className="transition-colors hover:text-foreground" href="/">
                                        Home
                                    </Link>
                                    <Link className="transition-colors hover:text-foreground" href="/checklist">
                                        Grading Checklist
                                    </Link>
                                    <a
                                        className="transition-colors hover:text-foreground"
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Facebook
                                    </a>
                                </nav>
                            </div>

                            <div className="space-y-3 text-sm text-muted-foreground md:text-right">
                                <p className="flex flex-wrap items-center gap-1 md:justify-end">
                                    Made with
                                    <span className="text-red-400" aria-label="love">
                                        <HeartIcon fill="currentColor" size={14} />
                                    </span>
                                    by{" "}
                                    <a
                                        className="font-medium text-foreground hover:underline"
                                        href="https://github.com/PineaFan"
                                    >
                                        Ryan Franks
                                    </a>
                                </p>
                                <p>
                                    Built with{" "}
                                    {packages.map((pkg, index) => (
                                        <span key={pkg.name}>
                                            <a className="font-medium text-foreground hover:underline" href={pkg.href}>
                                                {pkg.name}
                                            </a>
                                            {index < packages.length - 1 ? ", " : "."}
                                        </span>
                                    ))}
                                </p>
                                <p className="flex flex-wrap items-center gap-1 md:justify-end">
                                    Hosted by{" "}
                                    <a
                                        className="flex items-center gap-1 font-medium text-foreground hover:underline"
                                        href="https://vercel.com"
                                    >
                                        <TriangleIcon fill="currentColor" size={14} />
                                        Vercel
                                    </a>
                                </p>
                            </div>
                        </div>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
