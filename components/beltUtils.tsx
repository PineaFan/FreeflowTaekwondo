import React from 'react';
import { belt } from '../types';
import untypedBelts from '../public/data/belts.json';

import Styles from '../styles/components/beltUtils.module.css';
import { SectionHeading } from './title';

const belts: Record<string, belt> = untypedBelts;


export function BeltSelect(props: React.PropsWithChildren<{
    currentBelt: string,
    setBelt: (value: number) => void,
    unset?: boolean
}>) {
    let functionBelts: Record<string, belt> = untypedBelts;
    // If unset is true, then the first option is "unset" and the rest are the belts. This should be a fake belt that is not in the belts.json file,
    // which allows the user to have no belt when the page is first loaded
    if (props.unset) {
        functionBelts = {"unset": {name: "Choose your belt", displayName: "Choose your belt", colour: "FFFFFF", stripe: "FFFFFF", requirements: { extra: [], minimum: { lessons: 0, months: 0, squads: 0, seniorGradeTrainings: 0 } }}, ...belts};
    }

    return <><select
        value={props.unset ? 'unset' : Object.keys(functionBelts).indexOf(props.currentBelt)}
        className={Styles.select}
        style={{borderColor: `#${functionBelts[props.currentBelt].stripe}`}}
        onChange={e => props.setBelt(parseInt(e.target.value) - (props.unset ? 1 : 0))}>{
            Object.values(functionBelts).map((belt, index) => <option
                key={index}
                value={index}
            >{belt.name}</option>
        )}
    </select>
    <p className={Styles.textOnly}>{belts[props.currentBelt].name}</p></>
}

export function NoBelt(props: React.PropsWithChildren<{
    backLink?: string,
    setBelt: (value: number) => void,
    title: string,
    prompt?: string,
}>) {
    return <div className={Styles.container}>
        <SectionHeading id="top" showLine={false}>{props.title}</SectionHeading>
        <p className={Styles.text}>You don&apos;t have a belt selected - Choose your belt below to get started</p>
        <div className={Styles.text}>{props.prompt || "Grading checklist for"} <BeltSelect currentBelt="white-senior" setBelt={props.setBelt} unset={true} /></div>
    </div>
}
