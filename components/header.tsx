import React from 'react';

import Styles from '../styles/components/header.module.css';
import { LeftArrow } from './icons';


const capitalise = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateHomeLocation = (backLink?: string) => {
    if (!backLink) {
        return "Home";
    }
    backLink = backLink.split("#")[0].split("?")[0];
    if (backLink === "/") {
        return "Home";
    }
    const split = backLink.split("/");
    return capitalise(split[split.length - 1]);
}

export default function Header(props: React.PropsWithChildren<{
    title: string,
    subtitle?: string,
    description: string,
    colour?: string,
    backLink?: string,  // TODO: Show this
    loading?: boolean,
}>) {
    const homeLocation = generateHomeLocation(props.backLink);
    return <div className={Styles.container}>
        <div className={Styles.close}>
            { props.backLink ? <a href={props.backLink} className={Styles.link}><LeftArrow colour={'6576CC'} />{homeLocation}</a> : null }
            <div className={Styles.horizontal}>
                <h1 className={Styles.h1}>{props.title}</h1>
            </div>
            {props.subtitle ? <h2 className={Styles.h2}>{props.subtitle}</h2> : null}
        </div>
        <div className={Styles.hr + " " + (props.loading ? Styles.loading : null)} style={{backgroundColor: `#${props.colour || '6576CC'}`}} />
        <p className={Styles.p}>{props.description}</p>
    </div>
}
