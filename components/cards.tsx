// Allows for rectangular components to be crated in a flexbox.
// Wrap automatically to the next line if needed

// Each card can contain an image, title, subtitle and button


import React from 'react';

import Styles from '../styles/components/card.module.css';
import Image from 'next/image';


export function Card(props: React.PropsWithChildren<{
    title?: string,
    subtitle?: string,
    description?: string,
    button?: {
        text: string,
        link: string
    },
    image?: string,
    icon?: string,
    accent?: string
}>) {
    const has_text = props.title || props.subtitle || props.description || props.button;
    const has_image = props.image;

    const textObject = <div className={Styles.text}>
        {props.title && <h2 className={Styles.title}>
            { props.icon && <img src={props.icon} className={Styles.icon} alt="" /> }{props.title}
        </h2>}
        {props.subtitle && <h3 className={Styles.description}>{props.subtitle}</h3>}
        {props.button && <a href={props.button.link} className={Styles.button} style={
            props.accent ? {
                border: `solid 3px #${props.accent}`, borderRadius: "100vw",
                backgroundColor: "#FFFFFF",
                color: "#424242"} : {}
            }>
                {props.button.text}
            </a>
        }
    </div>

    if (has_image && has_text) {
        return <div className={Styles.card} style={props.accent ? {boxShadow: `0 0 1rem #${props.accent}80`} : {}}>
            <div className={Styles.image}>
                <img src={"/" + props.image!} className={Styles.image} alt="" />
            </div>
            {textObject}
        </div>;
    } else if (!has_image && has_text) {
        return <div className={Styles.card}> {textObject} </div>;
    }


}


export function CardRow(props: React.PropsWithChildren<{}>) {
    return <div className={Styles.row}>
        {props.children}
    </div>
}
