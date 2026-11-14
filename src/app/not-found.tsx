"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
            <Image src="/icon.svg" alt="Freeflow Taekwondo" width={192} height={192} className="h-auto w-32" />
            <div>
                <p className="text-6xl font-bold mt-4">404</p>
                <h1 className="mt-2 text-2xl font-semibold">Page not found</h1>
                <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
            </div>
            <div className="flex gap-2">
                <Button size="lg" onClick={() => window.history.back()}>
                    <ChevronLeftIcon /> Back
                </Button>
                <Link href="/">
                    <Button size="lg">
                        <HomeIcon /> Back to home
                    </Button>
                </Link>
            </div>
        </main>
    );
}
