import React from 'react';

import Styles from '../../styles/components/checklistModule/patterns.module.css';
import { belt, pattern } from '../../types';
import { SectionSubheading, SectionSmallSubheading } from '../title'
import CollapsibleContent from '../collapsibleContent';
import { Card, CardRow } from '../cards'
import Link from 'next/link';


function constructPattern(patternData: pattern, index: number, accent: string) {
    return <div key={index}>
        <SectionSubheading id={`patterns.${index}`} showLine={false}>{patternData.name}</SectionSubheading>
        <CardRow>
            <Card
                title={patternData.name}
                subtitle={patternData.about.join(". ") + "."}
                button={patternData.video ? {text: "Watch on YouTube", link: patternData.video} : undefined}
                image={patternData.video ? `youtube/${patternData.video}` : undefined}
                accent={accent}
            />
            <Card
                title="Ready position"
                subtitle={`The ready position for ${patternData.name} is ${patternData.ready}.`}
                image={`patterns/${patternData.ready}.svg`}  // TODO
                accent={accent}
            />
            <Card
                title="Diagram"
                subtitle={`The diagram for ${patternData.name} can be seen above. ${patternData.facing}`}
                image={`patterns/${patternData.diagram}.svg`}
                fitMethod="showAll"
                accent={accent}
            />
        </CardRow>
        <SectionSmallSubheading>Movements</SectionSmallSubheading>
        { /* TODO: Make this collapsible with a --- show more --- effect */}
        <CollapsibleContent accent={accent}>
            <p>Ready position: {patternData.ready}</p>
            {
                patternData.moves.map((move, index) => {
                    return <p key={index}>{index + 1}: {move}</p>
                })
            }
            <p>To finish: {patternData.end}</p>
        </CollapsibleContent>
    </div>
}


export default function Patterns(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: pattern[];
}>) {
    return <>
        <div className={Styles.inlineText}>
            <p>For your {props.beltObject.displayName} grading you will have to perform </p>
            {
                props.data.map((pattern, index) => {
                    return <>
                        <Link href={`#patterns.${index}`} key={index}>{pattern.name}{index === props.data.length - 1 ? "" : ", "}</Link>
                        {index === props.data.length - 2 ? " and " : ""}
                    </>
                })
            }
        </div>
        {
            props.data.map((pattern, index) => {
                return constructPattern(pattern, index, props.beltObject.stripe)
            })
        }
    </>
}
