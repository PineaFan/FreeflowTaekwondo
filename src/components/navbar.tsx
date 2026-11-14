import { NavigationMenu, NavigationMenuButton, NavigationMenuList } from "@/components/ui/navigation-menu";
import Image from "next/image";
import { MobileNav } from "@/components/navbar-mobile";
import { NAV_LINKS } from "@/lib/navigation";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

export default function Navbar() {
    return (
        <>
            <NavigationMenu className="px-2 md:px-4">
                <NavigationMenuList className="flex-1 justify-start">
                    <NavigationMenuButton href="/#">
                        <Image
                            src="/icon.svg"
                            alt="Freeflow Taekwondo logo"
                            width={32}
                            height={32}
                            className="size-8 shrink-0"
                            priority
                            loading="eager"
                        />
                        Freeflow Taekwondo
                    </NavigationMenuButton>
                </NavigationMenuList>

                {/* Desktop links (future: search bar as another item) */}
                <NavigationMenuList className="hidden flex-1 justify-end gap-1 md:flex">
                    {NAV_LINKS.map(({ href, label, icon: Icon }, index) => (
                        <Fragment key={href}>
                            <NavigationMenuButton href={href}>
                                <Icon className="size-4" />
                                {label}
                            </NavigationMenuButton>
                            {index < NAV_LINKS.length - 1 && <Separator orientation="vertical" className="my-2" />}
                        </Fragment>
                    ))}
                </NavigationMenuList>

                {/* Mobile */}
                <div className="md:hidden">
                    <MobileNav />
                </div>
            </NavigationMenu>
        </>
    );
}
