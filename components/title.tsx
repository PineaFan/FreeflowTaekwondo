import React from 'react';

import Styles from '../styles/components/title.module.css';

export function SectionHeading(props: React.PropsWithChildren<{
    id: string,
    showLine?: boolean
}>) {
    return <>
        {props.showLine && <div className={Styles.hr} />}
        <h1 className={Styles.h1} id={props.id}>{props.children}</h1>
    </>
}

export function SectionSubheading(props: React.PropsWithChildren<{
    id: string,
    showLine?: boolean
}>) {
    return <>
        {props.showLine && <div className={Styles.hr} />}
        <h2 className={Styles.h2} id={props.id}>{props.children}</h2>
    </>
}

export function SectionSmallSubheading(props: React.PropsWithChildren<{
    id?: string
}>) {
    return <h3 className={Styles.h3} id={props.id ? props.id : undefined}>{props.children}</h3>
}
