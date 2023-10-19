import React from 'react';

import Styles from '../styles/components/header.module.css';
import Image from 'next/image';

export default function Header(props: React.PropsWithChildren<{
    title: string,
    subtitle?: string,
    description: string,
    colour?: string,
    showHomeButton?: string,  // TODO: Show this
    loading?: boolean,
}>) {
    return <div className={Styles.container}>
        <div className={Styles.close}>
            <div className={Styles.horizontal}>
                <h1 className={Styles.h1}>{props.title}</h1>
            </div>
            {props.subtitle ? <h2 className={Styles.h2}>{props.subtitle}</h2> : null}
        </div>
        <div className={Styles.hr + " " + (props.loading ? Styles.loading : null)} style={{backgroundColor: `#${props.colour || '6576CC'}`}} />
        <p className={Styles.p}>{props.description}</p>
    </div>
}
