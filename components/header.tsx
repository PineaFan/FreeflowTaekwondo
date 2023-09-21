import React from 'react';

import Styles from '../styles/components/header.module.css';

export default function Header(props: React.PropsWithChildren<{
    title: string,
    subtitle?: string,
    description: string,
    colour?: string
}>) {
    return <div className={Styles.container}>
        <div className={Styles.close}>
            <h1 className={Styles.h1}>{props.title}</h1>
            {props.subtitle ? <h2 className={Styles.h2}>{props.subtitle}</h2> : null}
        </div>
        <div className={Styles.hr} style={{backgroundColor: `#${props.colour || '6576CC'}`}} />
        <p className={Styles.p}>{props.description}</p>
    </div>
}
