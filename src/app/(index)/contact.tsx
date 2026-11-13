import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
    ExternalLinkIcon,
    MailIcon,
    PhoneIcon,
    Share2Icon,
} from "lucide-react";
import _ from "lodash";
import { SectionHeading } from "./sections";

const contact = {
    email: "stacey@freeflowtaekwondo.com",
    phone: "07966706791",
    facebook: "https://facebook.com/tkdclasses/"
};

export function ContactSection() {
    return (
        <section className="w-full space-y-4 text-center mt-8">
            <SectionHeading id="contact">Contact</SectionHeading>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-stretch mx-auto">
                <Card className="flex h-full flex-col">
                    <CardHeader className="mb-0">
                        <CardTitle className="flex flex-row items-center justify-center gap-2">
                            <MailIcon size={16} />
                            Email
                        </CardTitle>
                        <CardDescription>Send Stacey an email at <span className="font-mono">{contact.email}</span>.</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Link href={`mailto:${contact.email}?subject=Freeflow%20Taekwondo`}>
                            <Button size="lg">
                                Send Email
                                <ExternalLinkIcon size={12} />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="flex h-full flex-col">
                    <CardHeader className="mb-0">
                        <CardTitle className="flex flex-row items-center justify-center gap-2">
                            <PhoneIcon size={16} />
                            Phone
                        </CardTitle>
                        <CardDescription>To contact Stacey by phone, call <span className="font-mono">07966706791</span>.</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Link href="tel:07966706791">
                            <Button size="lg">
                                Call
                                <ExternalLinkIcon size={12} />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="flex h-full flex-col">
                    <CardHeader className="mb-0">
                        <CardTitle className="flex flex-row items-center justify-center gap-2">
                            <Share2Icon size={16} />
                            Facebook
                        </CardTitle>
                        <CardDescription>Join the Facebook group for updates and messages.</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Link href="https://facebook.com/tkdclasses/" target="_blank" rel="noreferrer">
                            <Button size="lg">
                                Visit
                                <ExternalLinkIcon size={12} />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
