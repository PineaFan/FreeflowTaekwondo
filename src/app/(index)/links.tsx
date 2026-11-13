import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ExternalLinkIcon, FileTextIcon, Link2Icon, SendIcon } from "lucide-react";
import _ from "lodash";
import { SectionHeading } from "./sections";

const policies = [
    { name: "Parent, Carer and Child Code of Conduct", link: "/policies/code-of-conduct.pdf" },
    { name: "Instructor Code of Ethics", link: "/policies/instructor-code-of-ethics.pdf" },
    { name: "Child Protection Policy", link: "/policies/child-protection-policy.pdf" },
    { name: "PUMA Safeguarding", link: "https://puma-uk.com/about#safeguarding" },
    { name: "PUMA Safeguarding Team", link: "/policies/puma-safeguarding-team.pdf" },
    { name: "Complaints Procedure", link: "/policies/complaints-procedure.pdf" }
];

function LinkButton({ href }: { href: string; children: React.ReactNode }) {
    const external = href.startsWith("http");
    const externalDomain = external ? new URL(href).hostname : null;
    const isEmail = href.startsWith("mailto:");
    return (
        <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
            <Button size="lg" variant="outline">
                {external ? <Link2Icon size={16} /> : isEmail ? <SendIcon size={16} /> : <FileTextIcon size={16} />}
                {isEmail ? "Send Email" : external ? externalDomain : "View PDF"}
                {external && <ExternalLinkIcon size={16} />}
            </Button>
        </Link>
    );
}

export function PoliciesSection() {
    return (
        <section className="w-full space-y-4 text-center mt-8  mx-auto">
            <SectionHeading id="policies">Policies</SectionHeading>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card className="flex h-full flex-col">
                    <Image
                        src="/images/safeguarding-logo.jpg"
                        alt="Safeguarding"
                        width={400}
                        height={300}
                        className="aspect-video w-full bg-white object-contain"
                    />
                    <CardHeader>
                        <CardTitle>Safeguarding</CardTitle>
                        <CardDescription className="text-balance">
                            We have demonstrated an ongoing commitment to safer sport in Martial Arts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Link href="/policies/puma-safeguarding.jpg">
                            <Button size="lg">
                                <FileTextIcon size={16} />
                                View Certificate
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="flex h-full flex-col">
                    <Image
                        src="/images/childline.jpg"
                        alt="ChildLine"
                        width={400}
                        height={300}
                        className="aspect-video w-full bg-white object-contain"
                    />
                    <CardHeader>
                        <CardTitle>ChildLine</CardTitle>
                        <CardDescription className="text-balance">
                            ChildLine is a private and confidential service for children and young people up to the age
                            of nineteen.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Link href="https://www.childline.org.uk" target="_blank" rel="noreferrer">
                            <Button size="lg">
                                Visit Website
                                <ExternalLinkIcon size={12} />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>

            <Card className="p-0">
                <CardContent className="p-0">
                    <ul className="divide-y text-left">
                        {policies.map((policy) => (
                            <li
                                key={policy.name}
                                className="flex items-center justify-between gap-4 p-2 hover:bg-muted duration-100"
                            >
                                <span className="font-medium">{policy.name}</span>
                                <LinkButton href={policy.link}>{policy.name}</LinkButton>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </section>
    );
}

const links = [
    { name: "Chesterfield Taekwondo", link: "https://chesterfieldtaekwondo.co.uk/" },
    { name: "PUMA Homepage", link: "https://puma-uk.com/" },
    { name: "Little PUMAs", link: "https://puma-uk.com/styles#lp" },
    { name: "Facebook Group", link: "https://facebook.com/tkdclasses/" },
    { name: "Website issues", link: "mailto:website@freeflowtaekwondo.com" }
];

export function UsefulLinksSection() {
    return (
        <section className="w-full space-y-4 text-center mt-8 mx-auto">
            <SectionHeading id="useful-links">Useful Links</SectionHeading>

            <Card className="p-0">
                <CardContent className="p-0">
                    <ul className="divide-y text-left">
                        {links.map((link) => (
                            <li
                                key={link.name}
                                className="flex items-center justify-between gap-4 p-2 hover:bg-muted duration-100"
                            >
                                <span className="font-medium">{link.name}</span>
                                <LinkButton href={link.link}>{link.name}</LinkButton>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </section>
    );
}
