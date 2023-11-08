import React from 'react';
import Image from 'next/image';


import Styles from '../styles/components/icons.module.css';


export function Share(props: React.PropsWithChildren<{
    colour?: string
}>) {
    let colour = props.colour || "#6576CC";
    if (colour[0] !== "#") {
        colour = "#" + colour;
    }
    return (
        <>
            <div className={Styles.container}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.icon} style={{height: "12px"}}>
                    <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H12V5H5V19H19V12H21V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM9.7 15.7L8.3 14.3L17.6 5H14V3H21V10H19V6.4L9.7 15.7Z" fill={colour}/>
                </svg>
            </div>
        </>
    );
}

export function RightArrow(props: React.PropsWithChildren<{
    colour?: string
}>) {
    let colour = props.colour || "#6576CC";
    if (colour[0] !== "#") {
        colour = "#" + colour;
    }
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.center}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className={Styles.icon}><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" fill={colour}/></svg>
                </div>
            </div>
        </>
    );
}

export function LeftArrow(props: React.PropsWithChildren<{
    colour?: string
}>) {
    let colour = props.colour || "#6576CC";
    if (colour[0] !== "#") {
        colour = "#" + colour;
    }
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.center}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className={Styles.icon}><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" fill={colour}/></svg>
                </div>
            </div>
        </>
    );
}

export function Circle(props: React.PropsWithChildren<{
    colour?: string
}>) {
    let colour = props.colour || "#6576CC";
    if (colour[0] !== "#") { colour = "#" + colour; }
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.center} style={{height: "1rem"}}>
                    <svg viewBox="0 0 24 24" fill={colour} xmlns="http://www.w3.org/2000/svg" className={Styles.icon}>
                        <circle cx="12" cy="12" r="12"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export function Ring(props: React.PropsWithChildren<{
    colour?: string
}>) {
    let colour = props.colour || "#6576CC";
    if (colour[0] !== "#") { colour = "#" + colour; }
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.center} style={{height: "1rem"}}>
                    <svg viewBox="0 0 24 24" fill={colour} xmlns="http://www.w3.org/2000/svg" className={Styles.icon}>
                        <circle cx="12" cy="12" r="10" stroke={colour} fill="transparent" strokeWidth="4"/>
                    </svg>
                </div>
            </div>
        </>
    );
}
