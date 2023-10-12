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
            {
                // Theory card images
                props.data.images.map((image, index) => {
                    return <Card
                        key={index}
                        title={`Theory Card` + (props.data.images.length > 1 ? ` ${index + 1} of ${props.data.images.length}` : "")}
                        subtitle={`View the ${props.beltObject.displayName} theory card in fullscreen to download or print it`}
                        image={`theory/${image}.png`}
                        button={{"text": "Download", "link": `theory/${image}.png`}}
                    />
                })
            }
            <Card
                title={"Flashcards"}
                subtitle={`Flashcards of the ${props.beltObject.displayName} theory card questions can be completed online, or printed out`}
                image="flashcard.png"
                button={{"text": "Flashcards", "link": `/flashcard`}}
            />
            <Card
                title={"Take a quiz"}
                subtitle={`If you think you can remember the whole card, you can practice an example quiz here`}
                image="quiz.png"
                button={{"text": "Quiz", "link": `/quiz`}}
            />
        </CardRow>
        <SectionSubheading id="theoryQuestions">Questions</SectionSubheading>
        <p>There are {props.data.questions.length} questions on the theory card. You will be asked 5 questions at your grading.</p>
        {/* {
            props.data.questions.map((question, index) => {
                return <div key={index} className={Styles.question}>
                    <p><b>Question {index + 1}</b></p>
                    <p>{question.prompt}</p>
                    <p><b>Answer:</b> {question.answer}</p>
                </div>
            })
        } */}
        {
            props.data.extra ? <>
                <SectionSubheading id="theoryExtra">Extra Information</SectionSubheading>
                <p>There are {props.data.extra.length} pieces of extra information on your theory card.</p>
            </> : null
        }
    </>
}
