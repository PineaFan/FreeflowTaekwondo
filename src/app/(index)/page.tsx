import _ from "lodash";
import { AboutSection, HeroSection, StudentOfTheYearSection } from "./info";
import { ClassesSection, LittlePumasSection, NewToTaekwondoSection } from "./classes";
import { ContactSection } from "./contact";
import { PoliciesSection, UsefulLinksSection } from "./links";

export default function Home() {
    return (
        <main className="flex flex-col gap-2 items-center">
            <HeroSection />
            [Search bar here]
            <div className="w-full max-w-400 px-4">
                <AboutSection />
                <div className="w-full max-w-5xl mx-auto">
                <StudentOfTheYearSection />
                <ClassesSection />
                <LittlePumasSection />
                <NewToTaekwondoSection />
                <ContactSection />
                <PoliciesSection />
                <UsefulLinksSection /></div>
            </div>
        </main>
    );
}
