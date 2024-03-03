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
    backLink?: string,
    loading?: boolean,
}>) {
    // Check query parameters for backLink and backText (bl and bt)
    const [backLink, setBackLink] = React.useState<{link?: string, text?: string}>({
        link: props.backLink,
        text: generateHomeLocation(props.backLink),
    });

    // Get the query parameters
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            const backLink = url.searchParams.get('bl');
            const backText = url.searchParams.get('bt');
            if (backLink) {
                setBackLink({
                    link: backLink,
                    text: backText || generateHomeLocation(backLink),
                });
            }
        }
    }, []);

    return <div className={Styles.container}>
        <div className={Styles.close}>
            { backLink.link ? <a href={backLink.link} className={Styles.link}><LeftArrow colour={'6576CC'} />{backLink.text}</a> : null }
            <div className={Styles.horizontal}>
                <h1 className={Styles.h1}>{props.title}</h1>
            </div>
            {props.subtitle ? <h2 className={Styles.h2}>{props.subtitle}</h2> : null}
        </div>
        <div className={Styles.hr + " " + (props.loading ? Styles.loading : null)} style={{backgroundColor: `#${props.colour || '6576CC'}`}} />
        <p className={Styles.p}>{props.description}</p>
    </div>
}
