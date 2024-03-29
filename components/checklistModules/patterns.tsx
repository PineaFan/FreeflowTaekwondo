import React from 'react';

import Styles from '../../styles/components/checklistModule/patterns.module.css';
import { belt, pattern } from '../../types';
import { SectionSubheading, SectionSmallSubheading } from '../title'
import CollapsibleContent from '../collapsibleContent';
import { Card, CardRow } from '../cards'
import Link from 'next/link';
import { RightArrow } from '../icons';


function constructPattern(patternData: pattern, index: number, accent: string, fullPage: boolean) {
    const moves = <div className={Styles.inlineText}>
        <div>
            <p className={Styles.leftText}>Ready position: {patternData.ready}</p>
                {
                    patternData.moves.map((move, index) => {
                        return <p key={index} className={Styles.leftText}>{index + 1}. {move}</p>
                    })
                }
            <p className={Styles.leftText}>To finish: {patternData.end}</p>
        </div>
    </div>
    // The ready position files are stored as the patternData.ready value, but only the first letter
    const readyPosition = patternData.ready.split(" ").map((word) => word[0]).join("").toUpperCase()
    const title = <SectionSubheading id={`patterns.${index}`} showLine={false}>{patternData.name}</SectionSubheading>
    return <div className={Styles.list} key={index}>
        { fullPage ? title : <a href={`pattern/${patternData.name}`} className={Styles.inlineText}>{title}<RightArrow colour={accent} /></a> }
        <CardRow>
            <Card
                title={patternData.name}
                subtitle={patternData.about.join(". ") + "."}
                button={patternData.video ? {text: "Watch on YouTube", link: patternData.video, newTab: true} : undefined}
                image={patternData.video ? `youtube/${patternData.video}` : undefined}
                accent={accent}
            />
            <Card
                title="Ready position"
                subtitle={`The ready position for ${patternData.name} is ${patternData.ready}.`}
                image={`patterns/junbi/${readyPosition}.jpg`}
                accent={accent}
                button={{text: "Fullscreen", link: `patterns/junbi/${readyPosition}.jpg`, newTab: true}}
            />
            <Card
                title="Diagram"
                subtitle={`The diagram for ${patternData.name} can be seen above. ${patternData.facing}.`}
                image={`patterns/${patternData.diagram}.svg`}
                fitMethod="showAll"
                accent={accent}
            />
        </CardRow>
        <SectionSmallSubheading id={`patterns.${index}.movements`}>Movements</SectionSmallSubheading>
        {fullPage ? moves : <CollapsibleContent accent={accent} scrollOnCollapse={`patterns.${index}.movements`}>{moves}</CollapsibleContent>}
    </div>
}


export default function Patterns(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: pattern[];
    fullPage?: boolean;
}>) {
    return <>
        { props.fullPage ? null : <div className={Styles.inlineText}>
            <p>For your {props.beltObject.displayName} grading you will have to perform:</p>
            {
                props.data.map((pattern, index) => {
                    return <div key={index}>
                        <Link href={`#patterns.${index}`}>{pattern.name}{index === props.data.length - 1 ? "" : ", "}</Link>
                        {index === props.data.length - 2 ? " and " : ""}
                    </div>
                })
            }
        </div> }
        {
            props.data.map((pattern, index) => {
                return constructPattern(pattern, index, props.beltObject.stripe, props.fullPage || false)
            })
        }
    </>
}
