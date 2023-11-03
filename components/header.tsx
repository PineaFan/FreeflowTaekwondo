import React from 'react';

import Styles from '../styles/components/header.module.css';
import Image from 'next/image';
import { LeftArrow } from './icons';


const capitalise = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateHomeLocation = (showHomeButton?: string) => {
    if (!showHomeButton) {
        return "Home";
    }
    showHomeButton = showHomeButton.split("#")[0].split("?")[0];
    if (showHomeButton === "/") {
        return "Home";
    }
    const split = showHomeButton.split("/");
    return capitalise(split[split.length - 1]);
}

export default function Header(props: React.PropsWithChildren<{
    title: string,
    subtitle?: string,
    description: string,
    colour?: string,
    showHomeButton?: string,  // TODO: Show this
    loading?: boolean,
}>) {
    const homeLocation = generateHomeLocation(props.showHomeButton);
    return <div className={Styles.container}>
        <div className={Styles.close}>
            { props.showHomeButton ? <a href={props.showHomeButton} className={Styles.link}><LeftArrow colour={props.colour} />{homeLocation}</a> : null }
            <div className={Styles.horizontal}>
                <h1 className={Styles.h1}>{props.title}</h1>
            </div>
            {props.subtitle ? <h2 className={Styles.h2}>{props.subtitle}</h2> : null}
        </div>
        <div className={Styles.hr + " " + (props.loading ? Styles.loading : null)} style={{backgroundColor: `#${props.colour || '6576CC'}`}} />
        <p className={Styles.p}>{props.description}</p>
    </div>
}
