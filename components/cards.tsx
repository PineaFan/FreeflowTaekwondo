import React from 'react';

import Styles from '../styles/components/card.module.css';
import { Share } from './icons';


export function Card(props: React.PropsWithChildren<{
    title?: string,
    subtitle?: string,
    description?: string,
    button?: {
        text: string,
        link: string,
        newTab?: boolean
    } | { text: string, link: string, newTab?: boolean }[],
    image?: string,
    icon?: string,
    accent?: string,
    fitMethod?: "showAll" | "fill"
}>) {
    let image = null;
    if (props.image && props.image.startsWith("youtube/")) {
        // Set image to a YouTube embed
        const videoId = props.image.split("v=")[1];
        image = <iframe
            className={Styles.image}
            src={`https://youtube.com/embed/${videoId}`}
            allow="clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen={true}
        />;
    } else if (props.image) {
        image = <img
            className={Styles.image}
            src={`/` + props.image}
            alt=""
            width={300}
            height={300}
            style={props.fitMethod === "showAll" ? {objectFit: "contain"} : {}}
        />;
    }
    const has_text = props.title || props.subtitle || props.description || props.button;
    const has_image = props.image;
    const button = props.button ? ( Array.isArray(props.button) ? props.button : [props.button]) : undefined

    const textObject = <div className={Styles.text}>
        <div className={Styles.distribute}>
            <>
                {props.title && <h2 className={Styles.title}>
                    { props.icon && <img src={props.icon} className={Styles.icon} alt="" /> }{props.title}
                </h2>}
                {props.subtitle && <h3 className={Styles.description}>{props.subtitle}</h3>}
            </>
            <>{button ? <div className={Styles.overflowFlex}>{button.map((button, index) => { return <a key={index} href={button.link} target={button.newTab ? "_blank" : ""} className={Styles.button} style={
                props.accent ? {
                    border: `solid 3px #${props.accent}`, borderRadius: "100vw",
                    backgroundColor: "#FFFFFF",
                    color: "#424242"} : {}
                }>
                    {button.text}
                    { button.newTab ? <Share colour={props.accent || "#FFFFFF"} /> : null }
                </a>
            })}</div> : null
            }</>
        </div>
    </div>

    if (has_image && has_text) {
        return <div className={Styles.card} style={props.accent ? {boxShadow: `0 0 1rem #${props.accent}80`} : {}}>
            <div className={Styles.image}>
                {image}
            </div>
            {textObject}
        </div>;
    } else if (!has_image && has_text) {
        return <div className={Styles.card}> {textObject} </div>;
    } else if (has_image && !has_text) {
        return <div className={Styles.card} style={props.accent ? {boxShadow: `0 0 1rem #${props.accent}80`} : {}}>
            <div className={Styles.image}>
                {image}
            </div>
        </div>;
    }

}


export function CardRow(props: React.PropsWithChildren<{}>) {
    return <div className={Styles.row}>
        {props.children}
    </div>
}
