import React from 'react';

import Styles from '../../styles/components/checklistModule/prearrangedSparring.module.css';
import { belt, prearrangedSparring } from '../../types';
import Link from 'next/link';
import { SectionSubheading } from '../title';


function constructPrearranged(sparring: prearrangedSparring, index: number, colour: string) {
    /*
        Name
    O Attacker |
    | Defender O
    O Measure  |
    O Start    |
    O Attack   |
    | Defence  O
    O Attack   |
    | Defence  O
    O Attack   |
    | Defence  O
    | Counter  O

    */

    // A move list must be generated. If the name starts with "3", attacks and defences are repeated 3 times.
    const moveList = [];
    switch (sparring.name[0]) {
        case "3": { // 3 step sparring
            moveList.push({ performedBy: "Attacker", move: "Measure", details: sparring.measure! })
            moveList.push({ performedBy: "Attacker", move: "Start", details: sparring.start! })
            for (let i = 0; i < 3; i++) {
                moveList.push({ performedBy: "Attacker", move: "Attack", details: sparring.attack })
                moveList.push({ performedBy: "Defender", move: "Defence", details: sparring.defence })
            }
            moveList.push({ performedBy: "Defender", move: "Counter", details: sparring.counter! })
            break;
        }
        case "2": { // 2 step sparring
            moveList.push({ performedBy: "Attacker", move: "Start", details: sparring.start! })
            moveList.push({ performedBy: "Attacker", move: "Attack", details: sparring.attack })
            moveList.push({ performedBy: "Defender", move: "Defence", details: sparring.defence })
            moveList.push({ performedBy: "Defender", move: "Counter", details: sparring.counter! })
            break;
        }
        case "1": { // 1 step sparring is special, so it will return its own thing
            return <>
                <SectionSubheading id={`prearrangedSparring.${index}`} showLine={false}>{sparring.name}</SectionSubheading>
                <p className={Styles.inlineText}>For 1 step sparring, the attacker steps forwards, and the defender will perform a single defence and counter.</p>
                <p className={Styles.inlineText}><b>Attack:</b>{sparring.attack}</p>
                <p className={Styles.inlineText}><b>Defence:</b>{sparring.defence}</p>
            </>
        }
    }
    const activeMove = <div className={Styles.activeMove} style={{backgroundColor: `#${colour}`}}>O</div>
    const inactiveMove = <div className={Styles.inactiveMove}>|</div>
    const currentMove = (person: string, current: string) => {
        return <div>
            {person === current ? activeMove : inactiveMove}
        </div>
    }
    const DEV = false;
    return <>
        <SectionSubheading id={`prearrangedSparring.${index}`} showLine={false}>{sparring.name}</SectionSubheading>
        <div className={Styles.center}>
            {
                DEV ?
                    <table className={Styles.sparringTable}>
                        <tbody>
                            <tr>
                                <td>Attacker</td>
                                <td>Move</td>
                                <td>Defender</td>
                            </tr>
                            {
                                moveList.map((move, index) => {
                                    const align: React.CSSProperties = { textAlign: move.performedBy === "Attacker" ? "left" : "right" }
                                    return <tr key={index}>
                                        <td style={align}>{currentMove("Attacker", move.performedBy)}</td>
                                        <td style={align}><b>{move.move}:</b> {move.details}</td>
                                        <td style={align}>{currentMove("Defender", move.performedBy)}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                : <div>{
                    moveList.map((move, index) => {
                        return <p key={index} style={{textAlign: "left", width: "100%"}}><b>{move.move}:</b> {move.details}</p>
                    })
                }</div>
            }
        </div>
    </>
}


export default function PrearrangedSparring(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: { name: string, moves: string[], objects: prearrangedSparring[] };
}>) {
    console.log(props.data);
    return <>
        <p className={Styles.inlineText}>Prearranged sparring can be performed with a partner, facing each other, or you can practice attacking or defending on its own as linework</p>
        <div className={Styles.inlineText}>
            <p>For your {props.beltObject.displayName} grading you will have to perform:</p>
            {
                props.data.objects.map((pattern, index) => {
                    return <div key={index}>
                        <Link href={`#prearrangedSparring.${index}`}>{pattern.name}</Link>
                        { index === props.data.objects.length - 1 ? "" : ", and"}
                    </div>
                })
            }
        </div>
        {
            props.data.objects.map((pattern, index) => {
                return constructPrearranged(pattern, index, props.beltObject.stripe);
            })
        }
    </>
}
