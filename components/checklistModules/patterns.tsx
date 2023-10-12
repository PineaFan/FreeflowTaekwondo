import React from 'react';

import Styles from '../styles/components/title.module.css';
import { belt, pattern } from '../../types';
import { SectionSubheading, SectionSmallSubheading } from '../title'
import { Card, CardRow } from '../cards'


function constructPattern(patternData: pattern, index: number) {
    return <div key={index}>
        <SectionSubheading id={`patterns/${index}`} showLine={false}>{patternData.name}</SectionSubheading>
        <CardRow>
            <Card
                title={patternData.name}
                subtitle={patternData.about.join(". ") + "."}
                button={patternData.video ? {text: "Watch on YouTube", link: patternData.video} : undefined}
                image={patternData.video ? `youtube/${patternData.video}` : undefined}
            />
            <Card
                title="Ready position"
                subtitle={`The ready position for ${patternData.name} is ${patternData.ready}.`}
                image={`patterns/${patternData.ready}.svg`}  // TODO
            />
            <Card
                title="Diagram"
                subtitle={`The diagram for ${patternData.name} can be seen above. ${patternData.facing}`}
                image={`patterns/${patternData.diagram}.svg`}
                fitMethod="showAll"
            />
        </CardRow>
        <SectionSmallSubheading>Movements</SectionSmallSubheading>
        { /* TODO: Make this collapsible with a --- show more --- effect */}
        <p>Ready position: {patternData.ready}</p>
        {
            patternData.moves.map((move, index) => {
                return <p key={index}>{index + 1}: {move}</p>
            })
        }
        <p>To finish: {patternData.end}</p>
    </div>
}


export default function Patterns(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: pattern[];
}>) {
    return <>
        {
            props.data.map((pattern, index) => {
                return constructPattern(pattern, index)
            })
        }
    </>
}
