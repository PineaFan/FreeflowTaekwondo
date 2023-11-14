import React, { useEffect, useState } from "react";

import untypedBelts from "../public/data/belts.json";
import untypedTheory from "../public/data/theory.json";
import { belt, theory } from "../types";
import Styles from "../styles/pages/quiz.module.css";

import Header from "../components/header";
import { NoBelt } from "../components/beltUtils";
import { SectionSmallSubheading } from "../components/title";
import next from "next";

const belts: Record<string, belt> = untypedBelts;
const theory: Record<string, theory> = untypedTheory;


const statuses: Record<string, string> = {
    "correct": "#60B258",
    "almost": "#E5AB71",
    "incorrect": "#F27878",
    "none": "#424242",
}

const typeInstructions: Record<string, {pre: string | undefined, post: string | undefined}> = {
    "translate": { pre: "What is '", post: "' in Korean?" },
    "exact": { pre: undefined, post: undefined },
    "GPT": { pre: undefined, post: undefined },
    "typo": { pre: undefined, post: undefined },
    "opinion": { pre: undefined, post: undefined },
    "list": { pre: undefined, post: undefined }
}


const preamble: string[] = [
    "You will be shown 5 questions from your theory card to answer.",
    "Your score will be given at the end, not after each question. You will be told which questions you got wrong, if any.",
    "You can take the quiz as many times as you like - the questions will be different each time.",
    "If you don't know the answer to a question you can skip it, but you won't get any points for it.",
    "Your answers do not need to be spelt correctly, but should be as close as you can get them.",
    "Good luck!"
]


const markAnswer = async (question: theory["questions"][0], answer: string): Promise<boolean> => {
    switch (question.responseType) {
        case "exact": { return question.answer === answer; }
        case "translate": { }
        case "GPT": { }
        case "typo": { }
        case "list": { }
        case "opinion": { return true }
    }
    // Artificial delay
    console.log("before")
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("after")
    return false;
}


export default function Flashcards() {
    const [belt, _setBelt] = useState("white-senior");  // The user's belt
    const [beltChose, setBeltChosen] = useState(false);  // Whether the user has chosen a belt
    const [includeExtra, setIncludeExtra] = useState(false);  // Whether to include extra questions
    const [includeOpinion, setIncludeOpinion] = useState(false);  // Whether to include opinion questions
    const [opacity, setOpacity] = useState(1);  // The opacity of the page [0, 1]
    const [updateOnRefresh, setUpdateOnRefresh] = useState(false);  // Whether to update the page on refresh

    const [textareaValue, setTextareaValue] = useState("");  // The value of the textarea

    const [questionList, setQuestionList] = useState<theory["questions"]>([]);  // The list of questions to be asked
    const [answerList, setAnswerList] = useState<string[]>([]);  // The list of answers to the questions ["" if not answered]
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);  // The number of the current question
    const [marks, setMarks] = useState<number[]>([]);  // The number of marks the user has for each question [-1 if not answered, 0 if wrong, 1 if correct]

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    function setBelt(value: number) {
        const belt = Object.keys(belts)[value];
        _setBelt(belt);
        localStorage.setItem("belt", belt);
        setBeltChosen(true);
    }

    useEffect(() => {
        const storedBelt = localStorage.getItem("belt");
        if (storedBelt && storedBelt in belts) {  // Get belt from local storage
            setBelt(Object.keys(belts).indexOf(storedBelt));
            setBeltChosen(true);
        }
    }, []);
    if (updateOnRefresh) {
        setUpdateOnRefresh(false);
    }

    const header = <Header
        title="Theory Quiz"
        colour={belts[belt].stripe}
        description="Prepare by taking a quiz on your theory card."
        backLink={"/checklist#theory"}
        loading={!beltChose}
    />;
    if (!beltChose) {
        return <>
            { header }
            <NoBelt title="Theory Quiz" backLink={'quiz'} setBelt={setBelt} prompt="Quiz for" />
        </>;
    }

    const ignoredTypes = ["DNA"]
    const questions = theory[belt].questions.filter((x) => !ignoredTypes.includes(x.responseType));
    const extra = theory[belt].extra ? theory[belt].extra!.filter((x) => !ignoredTypes.includes(x.responseType)) : [];
    const opinionQuestions = theory[belt].questions.filter((x) => x.responseType === "opinion").length;
    const hasOpinionQuestion = opinionQuestions > 0;

    const beginQuiz = () => {
        setOpacity(0);
        setTimeout(() => {
            let possibleQuestions = questions
            let possibleExtra = extra
            let questionCount = 5;
            let extraCount = 0;
            if (includeExtra) {
                questionCount -= 2;
                extraCount += 2;
            }
            if (!includeOpinion) {
                possibleQuestions = possibleQuestions.filter((x) => x.responseType !== "opinion");
                possibleExtra = possibleExtra.filter((x) => x.responseType !== "opinion");
            }
            const questionList = [];
            for (let i = 0; i < questionCount; i++) {
                if (i === 0) {
                    const index = Math.floor(Math.random() * 3);
                    questionList.push(possibleQuestions[index]);
                    possibleQuestions.splice(index, 1);
                    continue;
                }
                const index = Math.floor(Math.random() * possibleQuestions.length);
                questionList.push(possibleQuestions[index]);
                possibleQuestions.splice(index, 1);
            }
            for (let i = 0; i < extraCount; i++) {
                const index = Math.floor(Math.random() * possibleExtra.length);
                questionList.push(possibleExtra[index]);
                possibleExtra.splice(index, 1);
            }
            setQuestionList(questionList);
            setAnswerList(Array(questionList.length).fill(""));
            setCurrentQuestionNumber(0);
            setOpacity(1);
        }, 600);
    }
    const restartQuiz = () => {
        setOpacity(0);
        setTimeout(() => {
            setMarks([]);
            setQuestionList([]);
            setAnswerList([]);
            beginQuiz();
            setOpacity(1);
        }, 600);
    }
    const clear = () => {
        setTextareaValue("");
    }

    const markAnswers = async () => {
        // For each question, mark the answer
        for (let i = 0; i < questionList.length; i++) {
            console.log(`Marking question ${i}: ${questionList[i].prompt}, ${answerList[i]}`)
            const question = questionList[i];
            const answer = answerList[i].trim().toLowerCase();
            console.log(`Using answer ${answer}`)
            if (answer === "") {
                const marksCopy = marks;
                marksCopy.push(-1);
                setMarks(marksCopy);
                continue;
            }
            const mark = await markAnswer(question, answer);
            const marksCopy = marks;
            marksCopy.push(mark ? 1 : 0);
            setMarks(marksCopy);
            setUpdateOnRefresh(true);
        }
        setOpacity(0);
        setTimeout(() => {
            setMarks(marks.concat([1]));
            setOpacity(1);
        }, 600);
    }
    const nextQuestion = () => {
        if (currentQuestionNumber === questionList.length) {
            return;
        }
        setOpacity(0);
        setTimeout(() => {
            setTextareaValue("");
            if (currentQuestionNumber === questionList.length - 1) {
                markAnswers();
            }
            setCurrentQuestionNumber(currentQuestionNumber + 1);
            setOpacity(1);
            // Focus on the textarea
            console.log(textAreaRef.current)
            if (textAreaRef.current) {
                console.log("focusing")
                textAreaRef.current.focus();
            }
        }, 600);
    }
    const skip = () => {
        nextQuestion();
    }
    const submit = () => {
        const answerListCopy = answerList;
        answerListCopy[currentQuestionNumber] = textareaValue;
        setAnswerList(answerListCopy);
        nextQuestion();
    }
    if (questionList.length === 0) {
        return <>
            { header }
            <div className={Styles.center} style={{opacity: opacity}}>
                <div className={Styles.textList}>
                    { preamble.map((line, index) => { return <p key={index} className={Styles.textLine}>- {line}</p> }) }
                </div>
                <SectionSmallSubheading>Options</SectionSmallSubheading>
                <div
                    className={Styles.button + " " + Styles.option}
                    onClick={() => setIncludeExtra(!includeExtra)}
                    style={{borderColor: includeExtra ? statuses.correct : statuses.incorrect}}
                >
                    <input type="checkbox" checked={includeExtra} readOnly />
                    <p className={Styles.textLine}>Include extra information</p>
                </div>
                { hasOpinionQuestion ? <div
                    className={Styles.button + " " + Styles.option}
                    onClick={() => setIncludeOpinion(!includeOpinion)}
                    style={{borderColor: includeOpinion ? statuses.correct : statuses.incorrect}}
                >
                    <input type="checkbox" checked={includeOpinion} readOnly />
                    <p className={Styles.textLine}>Include opinion questions</p>
                </div> : null }
                { questions.length - opinionQuestions < 5 ? <p className={Styles.textLine}>This card has less than 5 non-opinion questions - It is recommended to enable opinion questions</p> : null }
                <br />
                <p className={Styles.button} onClick={() => beginQuiz()} style={{borderColor: statuses.correct}}>Begin Quiz</p>
            </div>
        </>
    } else if (currentQuestionNumber < questionList.length) {
        const question = questionList[currentQuestionNumber];
        return <>
            { header }
            <div className={Styles.center} style={{opacity: opacity}}>
                <p className={Styles.count}>{currentQuestionNumber + 1} / {questionList.length}</p>
                <p className={Styles.question}>{typeInstructions[question.responseType].pre}{question.prompt}{typeInstructions[question.responseType].post}</p>
                { question.responseType === "list" ? <p className={Styles.question}>Use a comma to split each answer</p> : null }
                <textarea className={Styles.textArea} placeholder="Type your answer here..." autoFocus={true} value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} ref={textAreaRef} />
                <div className={Styles.buttonRow}>
                    <p className={Styles.button} style={{borderColor: statuses.incorrect}} onClick={() => skip()}>Skip</p>
                    <p className={Styles.button} style={{borderColor: statuses.almost}} onClick={() => clear()}>Clear</p>
                    <p className={Styles.button} style={{borderColor: statuses.correct}} onClick={() => submit()}>Submit</p>
                </div>
            </div>
        </>
    } else if (currentQuestionNumber === questionList.length && (!marks.length || marks.length <= questionList.length)) {
        return <>
            { header }
            <div className={Styles.center} style={{opacity: opacity}}>
                <div className={Styles.progressContainer}>
                    <div className={Styles.progress} style={{
                        width: `${(marks.length / questionList.length) * 100}%`,
                        backgroundColor: "#" + (belts[belt].stripe === "FFFFFF" ? statuses.correct : belts[belt].stripe),
                    }} />
                </div>
                Marking your answers
            </div>
        </>
    } else if (currentQuestionNumber === questionList.length && marks.length === questionList.length + 1) {
        const userMarks: typeof marks = marks.slice(0, -1);
        const correct = userMarks.filter((x) => x === 1).length;
        const incorrect = userMarks.filter((x) => x === 0).length;
        const skipped = userMarks.filter((x) => x === -1).length;
        return <>
            { header }
            <div className={Styles.center} style={{opacity: opacity}}>
                <p className={Styles.count}>Quiz Complete</p>
                <p className={Styles.question}>You got {correct} questions correct, {incorrect} questions incorrect, and skipped {skipped} questions.</p>
                <p className={Styles.question}>Your score is {correct} / {questionList.length}</p>
                <p className={Styles.button} style={{borderColor: statuses.correct}} onClick={() => restartQuiz()}>Take Another Quiz</p>
                <p className={Styles.button} style={{borderColor: statuses.almost}} onClick={() => window.location.href = "/flashcards"}>Revise Theory Card</p>
            </div>
        </>
    } else {
        return <>a
            <p>{marks.length} {currentQuestionNumber} {questionList.length}</p>
            b
            <p>{marks.length === questionList.length} {currentQuestionNumber === questionList.length} {marks.length === questionList.length && currentQuestionNumber === questionList.length}</p>
        </>
    }
}
