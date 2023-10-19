import React from 'react';


import { Card, CardRow } from '../cards';

import Styles from '../../styles/components/checklistModule/theory.module.css';
import { belt, theory } from '../../types';
import { SectionSubheading } from '../title';
import CollapsibleContent from '../collapsibleContent';


const formatAnswer = (answer: string | string[] | undefined): string => {
    if (typeof answer === "string") {
        return answer;
    } else if (answer === undefined) {
        return "Opinion based question";
    } else {
        return answer.join(", ");
    }
}


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
                        accent={props.beltObject.stripe}
                    />
                })
            }
            {/* <Card
                title={"Flashcards"}
                subtitle={`Flashcards of the ${props.beltObject.displayName} theory card questions can be completed online, or printed out`}
                image="flashcard.png"
                button={{"text": "Flashcards", "link": `/flashcard`}}
                accent={props.beltObject.stripe}
            />
            <Card
                title={"Take a quiz"}
                subtitle={`If you think you can remember the whole card, you can practice an example quiz here`}
                image="quiz.png"
                button={{"text": "Quiz", "link": `/quiz`}}
                accent={props.beltObject.stripe}
            /> */}
        </CardRow>
        <SectionSubheading id="theoryQuestions">Questions</SectionSubheading>
        <CollapsibleContent accent={props.beltObject.stripe} scrollOnCollapse={`theory.questions`}>
            <p id="theory.questions">There are {props.data.questions.length} questions on the theory card. You will be asked 5 questions at your grading.</p>
            <div className={Styles.list}>{
                props.data.questions.map((question, index) => {
                    return <div className={Styles.question} key={index}>
                        <p className={Styles.prompt}>{question.prompt}</p>
                        <p className={Styles.answer} style={{borderLeftColor: `#${props.beltObject.stripe}`}}>{formatAnswer(question.answer)}</p>
                    </div>
                })
            }</div>
        </CollapsibleContent>
        {
            props.data.extra ? <>
                <SectionSubheading id="theoryExtra">Extra Information</SectionSubheading>
                <CollapsibleContent accent={props.beltObject.stripe} scrollOnCollapse={`theory.extra`}>
                    <p id="extra">There are {props.data.extra.length} pieces of extra information on your theory card.</p>
                    <div className={Styles.list} id={"theory.extra"}>{
                        props.data.extra.map((question, index) => {
                            return <div className={Styles.question} key={index}>
                                <p className={Styles.prompt}>{question.prompt}</p>
                                <p className={Styles.answer} style={{borderLeftColor: `#${props.beltObject.stripe}`}}>{formatAnswer(question.answer)}</p>
                            </div>
                        })
                    }</div>
                </CollapsibleContent>
            </> : null
        }
    </>
}
