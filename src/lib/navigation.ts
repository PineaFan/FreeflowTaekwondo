import { ListTodoIcon, MailIcon } from "lucide-react";

export const NAV_LINKS = [
    { href: "/checklist", label: "Grading Checklist", icon: ListTodoIcon },
    { href: "/#contact", label: "Contact", icon: MailIcon }
] as const;
