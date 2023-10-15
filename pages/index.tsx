import React from 'react';

import Header from '../components/header';
import { Card, CardRow } from '../components/cards';
import { SectionHeading, SectionSubheading } from '../components/title';
import { Lesson } from '../components/lesson';
import { SocialPost } from '../components/socialPost';

import Styles from '../styles/pages/index.module.css';

import classes from '../public/data/classes.json';
import Image from 'next/image';


export default function Index(props: React.PropsWithChildren<{}>) {
    return <>
        <Header
            title="Freeflow Taekwondo"
            subtitle="Stone, Cheadle and Chell Taekwondo classes"
            description="A safe, family-friendly place for all ages to learn the Korean art of Self Defence."
        />
        <SectionHeading id="about">About</SectionHeading>
        <CardRow>
            <Card
                title="Weekly Lessons"
                subtitle="4 lessons held every week in 3 different locations."
                button={{text: "Class Times", link: "/#classes"}}
                image="images/sparring.png"
            />
            <Card
                title="Events"
                subtitle="Details on when camps, squads, gradings and seminars are being held this year."
                // button={{text: "Events", link: "/#events"}} TODO
                image="images/gradings.png"
            />
            <Card
                title="Grading Checklist"
                subtitle="Check up on theory, patterns and other requirements for your next grading."
                button={{text: "Open Checklist", link: "/checklist"}}
                image="images/belts.svg"
            />
            <Card
                title="Trained Instructor"
                subtitle="Stacey Weatherer (5th Degree Black Belt) is fully DBS checked, fully insured and first aid trained."
                button={{text: "Contact", link: "/#contact"}}
                image="images/stacey.png"
            />
        </CardRow>
        <SocialPost>Huge congratulations to these young men winning Stone&apos;s student of the year 2022. Keep up the hard work all of you!</SocialPost>
        <CardRow>
            <Card image="images/SOTY/2.jpeg"/>
            <Card image="images/SOTY/1.jpeg"/>
            <Card image="images/SOTY/3.jpeg"/>
            <Card image="images/SOTY/4.jpeg"/>
        </CardRow>
        <SectionHeading id="classes" showLine={true}>Classes</SectionHeading>
        <p className={Styles.centerIcon + " " + Styles.vertical}><Image className={Styles.ico} src="/icons/calendar.svg" height={24} width={24} alt=""/>Tap a time to add it to your calendar</p>
        <div className={Styles.center}>
            <div className={Styles.list}>
                {
                    classes.map((c, i) => {
                        return <Lesson key={i} {...c} />
                    })
                }
            </div>
        </div>
        <br />
        <SectionSubheading id="new">New to Taekwondo?</SectionSubheading>
        <p style={{width: "100%", textAlign: "center"}}>Get your first 2 lessons free with no commitments - Just let Stacey know before you come!</p>
        <SectionHeading id="contact" showLine={true}>Contact</SectionHeading>
        <CardRow>
            <Card
                title="Email"
                subtitle="Stacey can be emailed at weatherers@aol.com"
                button={{text: "Email", link: "mailto:weatherers@aol.com"}}
                icon={"icons/email.svg"}
            />
            <Card
                title="Phone"
                subtitle="To contact Stacey by phone, call 07966706791"
                button={{text: "Call", link: "tel:07966706791"}}
                icon={"icons/phone.svg"}
            />
            <Card
                title="Facebook"
                subtitle="Join the Facebook group for updates and messages"
                button={{text: "Visit", link: "https://www.facebook.com/tkdclasses/"}}
                icon={"icons/facebook.svg"}
            />
        </CardRow>
        {/* Events */}
        <SectionHeading id="policies" showLine={true}>Policies</SectionHeading>
        <div className={Styles.center}>
            <div className={Styles.linkList}>
                <a href="/policies/CodeOfConduct.pdf">Parent, Carer and Child Code of Conduct</a>
                <a href="/policies/InstructorCodeOfConduct.pdf">Instructor Code of Ethics</a>
                <a href="/policies/ChildProtectionPolicy.pdf">Child Protection Policy</a>
                <a href="https://puma-uk.com/about#safeguarding">PUMA Safeguarding</a>
                <a href="/policies/SafeguardingTeam">PUMA Safeguarding Team</a>
                <a href="/policies/ComplaintsProcedure.pdf">Complaints Procedure</a>
            </div>
            <br /><br />
            <CardRow>
                <Card
                    title="Safeguarding"
                    image="policies/safeguardingLogo.jpg"
                    subtitle="We have demonstrated an ongoing commitment to safer sport in Martial Arts."
                    button={{text: "View Certificate", link: "/policies/safeguarding.jpg"}}
                    fitMethod='showAll'
                />
                <Card
                    title="ChildLine"
                    image="policies/childline.jpeg"
                    subtitle="ChildLine is a private and confidential service for children and young people up to the age of nineteen."
                    button={{text: "Visit Website", link: "https://www.childline.org.uk/"}}
                    fitMethod='showAll'
                />
            </CardRow>
        </div>
    </>;
}
