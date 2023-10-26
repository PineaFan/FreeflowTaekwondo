import React from 'react';

import Styles from '../../styles/components/checklistModule/linework.module.css';
import { belt, linework } from '../../types';


const blackStripeInformation = [
    "Black stripes do not have any pre-set linework to perform - You will be made aware on the week before your grading."
]


export default function Linework(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: linework[];
}>) {
    const processedLinework: linework[] = [];
    let previousDirection: string = "";
    // If the direction is the same as the previous one, add a "turn around" linework
    props.data.forEach((linework: linework) => {
        if (linework.direction === previousDirection) {
            processedLinework.push({
                direction: "",
                english: "Turn around",
                korean: "Dwiyo Torra",
            });
        }
        processedLinework.push(linework);
        previousDirection = linework.direction;
    });
    return <div className={Styles.container}>
        <div className={Styles.center}>
            {
                props.belt !== "black-stripe" ? (
                    processedLinework.map((linework: linework, index: number) => {
                        return <p key={index} className={Styles.linework}>
                            <b>{linework.direction ? `${linework.direction + ":"}` : ""}</b> {linework.english} ({linework.korean})
                        </p>
                    })
                ) : (
                    blackStripeInformation.map((text, index) => {
                        return <p key={index} className={Styles.linework}>{text}</p>
                    })
                )
            }
        </div>
    </div>
}
