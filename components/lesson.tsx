import React from 'react';

import Styles from '../styles/components/lesson.module.css';
import Image from 'next/image';


export function Lesson(props: React.PropsWithChildren<{
    day: string,
    location_name: string,
    building_name: string,
    postcode: string,
    geo: string,

    classes: {
        name: string,
        start: string,
        end: string,
        UUID: string
    }[]
}>) {
    const apple_link = `https://maps.apple.com/?q=${props.geo}`;

    return <div className={Styles.group}>
        <div className={Styles.row}>
            <h1 className={Styles.day}>{props.day}</h1>
            <p className={Styles.town}>({props.location_name})</p>
        </div>
        <a href={apple_link} className={Styles.location}>
            {props.building_name} ({props.postcode}) <Image src="/icons/open.svg" width={16} height={16} alt="open"/>
        </a> {/*TODO: Maybe make this look nicer */}
        <div className={Styles.classes}>
            {props.classes.map((c, i) => {
                return <div key={i} className={Styles.class}>
                    <a className={Styles.name} href={`/api/event?id=${c.UUID}`}>{c.name}: {c.start} - {c.end}</a>
                </div>
            })}
        </div>
    </div>
}
