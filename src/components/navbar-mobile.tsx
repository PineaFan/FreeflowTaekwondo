"use client";

import { useState } from "react";
import Link from "next/link";
import { HomeIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/navigation";
import { Button } from "./ui/button";
import { NavigationMenuButton } from "./ui/navigation-menu";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Open menu" render={<Button variant="ghost" />}>
                <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64 gap-0 bg-background/80 backdrop-blur-md">
                <SheetTitle className="p-4 text-base">Freeflow Taekwondo</SheetTitle>
                <nav className="flex flex-col gap-1 px-2">
                    {/* Future: <SearchBar /> */}
                    {[{ href: "/#", label: "Home", icon: HomeIcon }, ...NAV_LINKS].map(
                        ({ href, label, icon: Icon }) => (
                            <NavigationMenuButton
                                href={href}
                                className="justify-start"
                                onClick={() => setOpen(false)}
                                key={href}
                            >
                                <Icon className="size-4" />
                                {label}
                            </NavigationMenuButton>
                        )
                    )}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
