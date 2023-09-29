import React from 'react';

import { Card, CardRow } from '../cards';

import Styles from '../../styles/components/checklistModule/theory.module.css';
import { belt, theory } from '../../types';
import { SectionSubheading } from '../title';

export default function Theory(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: theory;
}>) {
    return <>
        <CardRow>
            <Card
                title={"Theory Card" + (props.data.images.length > 1 ? "s" : "")}
                subtitle={`Images of the ${props.beltObject.displayName} theory card${props.data.images.length > 1 ? "s" : ""} are below`}
                image={`theory/${props.data.images[0]}.png`}  // TODO: Add support for multiple images
            />
            <Card
                title={"Flashcards"}
                subtitle={`Flashcards of the ${props.beltObject.displayName} theory card questions can be completed online, or printed out`}
                image="flashcard.png"
                button={{"text": "Flashcards", "link": `/flashcard#`}}
            />
            <Card
                title={"Take a quiz"}
                subtitle={`If you think you can remember the whole card, you can practice an example quiz here`}
                image="quiz.png"
                button={{"text": "Quiz", "link": `/quiz#`}}
            />
        </CardRow>
        <SectionSubheading id="theoryQuestions">Questions</SectionSubheading>
        <SectionSubheading id="theoryExtra">Extra Information</SectionSubheading>
    </>
}
