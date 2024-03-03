import { useEffect, useState } from "react";

import untypedBelts from "../public/data/belts.json";
import untypedTheory from "../public/data/theory.json";
import { belt, theory } from "../types";
import Styles from "../styles/pages/flashcard.module.css";

import Header from "../components/header";
import { isMobile, isMacOs } from "react-device-detect";
import { NoBelt } from "../components/beltUtils";
import { LeftArrow, RightArrow, Circle, Ring } from "../components/icons";

import Chart, { ArcElement, Tooltip, Legend} from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useReward } from "react-rewards";
import { SectionSubheading } from "../components/title";


Chart.register(ArcElement, Tooltip, Legend);


const belts: Record<string, belt> = untypedBelts;
const theory: Record<string, theory> = untypedTheory;


const statuses: Record<string, string> = {
    "correct": "#60B258",
    "almost": "#E5AB71",
    "incorrect": "#F27878",
    "none": "#424242",
}

const typeInstructions: Record<string, string | null> = {
    "translate": "What's this in Korean?",
    "exact": null,
    "GPT": null,
    "typo": null,
    "opinion": "There is no right answer, just give your opinion",
    "list": null,
    "DNA": null,
}

const noneSelected = {prompt: "No questions to show - Select a type to get started", responseType: "none"};

const capitalise = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const answerString = (object: string | string[] | undefined) => {
    if (typeof object === "string") {
        return capitalise(object);
    } else if (typeof object === "undefined") {
        return "";
    } else {
        return capitalise(object.join(", "));
    }
}

function questionSide(question: theory["questions"][0], accent: string, showAll?: () => void) {
    return <>
        <p className={Styles.text}>{question.prompt}</p>
        { typeInstructions[question.responseType] === null ? null : <>
            <p className={Styles.text}>{typeInstructions[question.responseType] || ""}</p>
        </> }
		{ question.responseType === "none" ? <p className={Styles.button} style={{borderColor: `#6576CC`}} onClick={showAll}>Show all questions</p> : null }
    </>
}
function answerSide(question: theory["questions"][0], accent: string) {
    return <>
        <div className={Styles.hr} style={{backgroundColor: `${accent}`}} />
        <p className={Styles.text}>{answerString(question.answer)}</p>
    </>
}

export default function Flashcards() {
    const [belt, _setBelt] = useState("white-senior");  // The user's belt
    const [beltChose, setBeltChosen] = useState(false);  // Whether the user has chosen a belt
    const [currentQuestion, setCurrentQuestion] = useState(0);  // The number of the current question
    const [cardAnimationStage, setCardAnimationStage] = useState(0);  // 0 for front (question), 2 for back (answer), 1 for q-> a, 3 for a-> q
    const [isShaking, setIsShaking] = useState(false);  // Whether the card is shaking
    const [markedAs, setMarkedAs] = useState<Record<string, "none" | "correct" | "incorrect" | "almost">>({});  // The user's answers
    const [resetClicks, setResetClicks] = useState(0);  // The number of times the user has clicked "reset all"
    const [currentCardData, setCurrentCardData] = useState<{prompt: string, responseType: string, answer?: string | string[], status: keyof typeof statuses}>({prompt: "", responseType: "", status: ""});  // The data for the current card
    const [statusesToShow, setStatusesToShow] = useState(["correct", "almost", "incorrect", "none"]);  // The statuses to show to the user, allowing them to filter the questions

    const [typesToShow, setTypesToShow] = useState(["questions"]);  // Whether to include extra information in the flashcards
    const [updateOnRefresh, setUpdateOnRefresh] = useState(false);  // Whether to update the page on refresh
    const [shakeNext, setShakeNext] = useState(false);  // Whether to shake the next card

    let questionNumber = currentQuestion;
    const interact = isMobile ? "Tap" : "Click"
    const modifier = isMacOs ? "Cmd" : "Ctrl";

    const { reward: correctReward, isAnimating: isCorrectAnimating } = useReward("correct", "confetti", {
        colors: Object.keys(statuses).filter((key) => key !== "none").map((key) => statuses[key]),
        elementCount: 50,
        lifetime: 100
    });
    const { reward: almostReward, isAnimating: isAlmostAnimating } = useReward("almost", "confetti", {
        colors: [statuses["almost"]],
        elementCount: 25,
    });

    const cardStages = [ Styles.cardFront, Styles.cardFlip ];

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
        if (localStorage.getItem("markedAs")) {  // Get the user's question statuses from local storage
            setMarkedAs(JSON.parse(localStorage.getItem("markedAs")!));
        }
    }, []);

    const header = <Header
        title="Theory Flashcards"
        colour={belts[belt].stripe}
        description={"Test your knowledge of the theory for your next grading." + (isMobile ? "" : ` Press ${modifier}+k for keyboard shortcuts.`)}
        backLink={"/checklist#theory"}
        loading={!beltChose}
    />;
    if (!beltChose) {
        return <>
            { header }
            <NoBelt title="Flashcards" backLink={'flashcard'} setBelt={setBelt} prompt="Flashcards for" />
        </>;
    }

    const ignoredTypes = ["DNA"]
    const questions = theory[belt].questions.filter((x) => !ignoredTypes.includes(x.responseType));
    const extra = theory[belt].extra ? theory[belt].extra!.filter((x) => !ignoredTypes.includes(x.responseType)) : [];

    let cardSections = typesToShow;
    let questionTypes: string[] = [];
    if (cardSections.length === 0) {
        cardSections = ["questions"];
        setTypesToShow(cardSections);
        setUpdateOnRefresh(true);
    }
    questionTypes = ["translate", "exact", "typo", "list", "GPT"];

    let filteredQuestions: theory["questions"] = [];
    let countFilteredQuestions: theory["questions"] = [];

    if (cardSections.includes("questions")) {
        filteredQuestions = filteredQuestions.concat(questions);
    }
    if (cardSections.includes("extra")) {
        filteredQuestions = filteredQuestions.concat(extra);
    }
    // Get all questions that aren't ignored, and a type the user wants
    filteredQuestions = filteredQuestions.filter((x) => (!ignoredTypes.includes(x.responseType)) && (questionTypes.includes(x.responseType)));

    countFilteredQuestions = Array.from(filteredQuestions)

    // Get all questions where it's marked as correct, almost, or incorrect if in the statusesToShow array
    filteredQuestions = filteredQuestions.filter((x) => statusesToShow.includes(markedAs[x.prompt] || "none"));

    if (filteredQuestions.length === 0) {
        filteredQuestions = [noneSelected];
    }
    if (questionNumber >= filteredQuestions.length) {
        setCurrentQuestion(0);
        questionNumber = 0;
    }

    if (currentCardData.status === "") {
        setCurrentCardData({... filteredQuestions[questionNumber], status: markedAs[filteredQuestions[questionNumber].prompt] || "none"});
    }


    const toggleQuestionType = (type: string, enable: boolean) => {
        let newTypesToShow = Array.from(typesToShow);
        if (enable) {
            newTypesToShow.push(type);
        } else {
            newTypesToShow = newTypesToShow.filter((x) => x !== type)
        }
        if (newTypesToShow.length === 0) {
            newTypesToShow.push(type === "questions" ? "extra" : "questions");
        }
        setTypesToShow(newTypesToShow);
        setUpdateOnRefresh(true);
    }

    const shakeCard = () => {
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
        }, 600);
    }
    const flipCard = () => {
        if (!filteredQuestions[questionNumber].answer) {
            shakeCard();
            return;
        }
        if (cardAnimationStage % 2 === 0) {
            setCardAnimationStage(cardAnimationStage + 1);
            // Wait 0.3s
            setTimeout(() => {
                setCardAnimationStage((cardAnimationStage + 2) % 4);
            }, 300);
        }
    }
    const nextQuestion = (force?: boolean, remainOnQuestion?: boolean) => {
        setShakeNext(false);
        if (cardAnimationStage % 2 === 0) {
            // if (  // If there are no questions
            //     (remainOnQuestion && filteredQuestions.length === 1) ||
            //     filteredQuestions.length === 0
            // ) { return shakeCard(); }
            setCardAnimationStage(cardAnimationStage + 1);
            // Wait 0.3s
            setTimeout(() => {
                setTimeout(() => {
                    setCardAnimationStage(0);
                }, 300);
                setCardAnimationStage(3);
                const next = (questionNumber + 1) % filteredQuestions.length
                if (!remainOnQuestion) {
                    questionNumber = next;
                }
                setCurrentQuestion(questionNumber);
                if (force) {
                    setCurrentCardData({... filteredQuestions[next], status: markedAs[filteredQuestions[next].prompt] || "none"});
                } else {
                    setCurrentCardData({... filteredQuestions[questionNumber], status: markedAs[filteredQuestions[questionNumber].prompt] || "none"});
                }

                // There is a special case when "remainOnQuestion" is true, and the last question has just been deleted.
                // In this case, the card data needs to be noneSelected
                if (force && filteredQuestions.length === 1 || filteredQuestions.length === 0) {
                    setCurrentCardData({... noneSelected, status: "none"});
                }
            }, 300);
        }
    }
    const previousQuestion = () => {
        setShakeNext(false);
        if (cardAnimationStage % 2 === 0) {
            // if (questionNumber === 0) { return shakeCard(); }
            setCardAnimationStage(cardAnimationStage + 1);
            // Wait 0.3s
            setTimeout(() => {
                setTimeout(() => {
                    setCardAnimationStage(0);
                }, 300);
                setCardAnimationStage(3);
                questionNumber = (questionNumber - 1 + filteredQuestions.length) % filteredQuestions.length;
                setCurrentQuestion(questionNumber);
                setCurrentCardData({... filteredQuestions[questionNumber], status: markedAs[filteredQuestions[questionNumber].prompt] || "none"});
            }, 300);
        }
    }
    const firstQuestion = (force?: boolean) => {
        if (cardAnimationStage % 2 === 0) {
            setShakeNext(false);
            if (questionNumber === 0 && !force) { return shakeCard(); }
            setCardAnimationStage(cardAnimationStage + 1);
            // Wait 0.3s
            setTimeout(() => {
                setTimeout(() => {
                    setCardAnimationStage(0);
                }, 300);
                setCardAnimationStage(3);
                questionNumber = 0;
                setCurrentQuestion(questionNumber);
                setCurrentCardData({... filteredQuestions[questionNumber], status: markedAs[filteredQuestions[questionNumber].prompt] || "none"});
            }, 300);
        }
    }
    const saveMarkedAsToLocalStorage = (markedAs: Record<string, "none" | "correct" | "incorrect" | "almost">) => {
        localStorage.setItem("markedAs", JSON.stringify(markedAs));
    }
    const markQuestion = (mark: "none" | "correct" | "incorrect" | "almost") => {
        setCurrentCardData({... currentCardData, status: mark});
        if (mark === "correct" && !isCorrectAnimating) {
            correctReward();
            console.log(ignoredTypes)
			setTimeout(() => {
                nextQuestion(filteredQuestions.length === 1 || !statusesToShow.includes("correct"), !statusesToShow.includes("correct"));
            }, 300)
        } else if (mark === "almost" && !isAlmostAnimating) {
            almostReward();
        }
        if (mark !== "correct") {
            setShakeNext(true);
        }
        setMarkedAs({...markedAs, [filteredQuestions[questionNumber].prompt]: mark});
        saveMarkedAsToLocalStorage({...markedAs, [filteredQuestions[questionNumber].prompt]: mark});
    }
    const handleReset = () => {
        setResetClicks(resetClicks + 1);
        if (resetClicks === 1) {
            setMarkedAs({});
            saveMarkedAsToLocalStorage({});
            setResetClicks(0);
            firstQuestion(true);
        } else if (resetClicks === 0) {
            setTimeout(() => {
                setResetClicks(0);
            }, 5000);
        }
    }
    const toggleStatus = (status: string) => {
        let newStatusesToShow = Array.from(statusesToShow);
        if (newStatusesToShow.includes(status)) {
            newStatusesToShow = newStatusesToShow.filter((x) => x !== status)
            setStatusesToShow(newStatusesToShow);
        } else {
            newStatusesToShow.push(status);
            setStatusesToShow(newStatusesToShow);
        }
        setUpdateOnRefresh(true);
    }
    const enableAllStatuses = () => {
        setStatusesToShow(["correct", "almost", "incorrect", "none"])
        setUpdateOnRefresh(true);
    }
    if (updateOnRefresh) {
        setUpdateOnRefresh(false);
        firstQuestion(true);
    }

    const handleKeyPress = (event: KeyboardEvent) => {
        /* If the user has a keyboard, they can navigate the flashcards using the keyboard
        Left and right go to the previous and next question respectively
        Space or enter flips the card
        1, 2, and 3 mark the question as correct, almost correct, and incorrect respectively
        */
        if (event.key === "ArrowLeft") {
            previousQuestion();
            return;
        } else if (event.key === "ArrowRight") {
            nextQuestion();
            return;
        } else if (event.key === " " || event.key === "f") {
            event.preventDefault();
            flipCard();
            return;
        } else if (event.key === "r") {
            handleReset();
            return;
        } else if (event.key === "k") {
            firstQuestion();
            return;
        }

        if (event.metaKey || event.ctrlKey) {
            if (event.key === "1") {
                event.preventDefault();
                toggleStatus("correct");
            } else if (event.key === "2") {
                event.preventDefault();
                toggleStatus("almost");
            } else if (event.key === "3") {
                event.preventDefault();
                toggleStatus("incorrect");
            } else if (event.key === "4") {
                event.preventDefault();
                toggleStatus("none");
            } else if (event.key === "s") {
                event.preventDefault();
                toggleQuestionType("questions", !typesToShow.includes("questions"));
            } else if (event.key === "e") {
                event.preventDefault();
                toggleQuestionType("extra", !typesToShow.includes("extra"));
            }
            return;
        }

        if (cardAnimationStage >= 2) {
            if (event.key === "1") {
                markQuestion("correct");
            } else if (event.key === "2") {
                markQuestion("almost");
            } else if (event.key === "3") {
                markQuestion("incorrect");
            }
        }
    }
    document.onkeydown = handleKeyPress;

    // Generate colour and cards
    const accent = statuses[markedAs[currentCardData.prompt] || "none"];

    const generatedQuestionSide = questionSide(currentCardData, accent, enableAllStatuses);
    const generatedAnswerSide = answerSide(currentCardData, accent);

    // Count the number of each status
    const counts: Record<string, number> = { "correct": 0, "almost": 0, "incorrect": 0, "none": 0 };
    const questionNames: string[] = countFilteredQuestions.map((x) => x.prompt);
    Object.keys(markedAs).forEach((key) => {
        if (questionNames.includes(key)) {
            counts[markedAs[key]]++;
        }
    });
    // Count the number of filteredQuestions that are "none"
    countFilteredQuestions.forEach((toCheck) => {
        if (!(toCheck.prompt in markedAs)) {
            counts["none"]++;
        }
    });

    // Chart config
    const config = {
        type: "doughnut",
        data: {
            labels: Object.keys(counts).filter((key) => statusesToShow.includes(key)).map((key) => capitalise(key)),
            datasets: [{
                label: " Questions",
                data: Object.keys(counts).filter((key) => statusesToShow.includes(key)).map((key) => counts[key]),
                backgroundColor: Object.keys(counts).filter((key) => statusesToShow.includes(key)).map((key) => statuses[key]),
                hoverOffset: 10
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    };

    return <>
        { header }
        {/* Buttons, total card */}
        <div className={Styles.center}>
            <p className={Styles.count}>{questionNumber + 1} / {filteredQuestions.length}</p>
            <div className={Styles.control}>
                <button className={Styles.inlineText} onClick={() => previousQuestion()}><LeftArrow />Back</button>
                <button className={Styles.inlineText} onClick={() => flipCard()}>Flip</button>
                <button className={Styles.inlineText + " " + (shakeNext ? Styles.shakeNext : null)} onClick={() => nextQuestion()}>{((questionNumber + 1) === Object.keys(filteredQuestions).length) ? "Restart" : "Next"}<RightArrow /></button>
            </div>
        </div>

        {/* Main card element */}
        <div className={Styles.cardControl}>
            <div style={{
                boxShadow: `0 0 1rem ${accent}80`,
                borderColor: `${accent}`,
                justifyContent: cardAnimationStage < 2 ? "center" : "flex-start",
            }} className={
                Styles.card + " " +
                cardStages[cardAnimationStage % 2] + " " +
                (isShaking ? Styles.shake : null)
            } onClick={() => currentCardData.responseType === "none" ? null : flipCard()}
            >
                { cardAnimationStage < 2 ? generatedQuestionSide : <>{generatedQuestionSide}{generatedAnswerSide}</> }
            </div>
        </div>

        {/* Mark as */}
        <div className={Styles.markAs}
            style={{
                opacity: cardAnimationStage >= 2 ? 1 : 0,
                pointerEvents: cardAnimationStage >= 2 ? "all" : "none",
                transitionDelay: cardAnimationStage >= 2 ? "0.3s" : "0s",
            }}
        >
            { Object.keys(statuses).filter(x => x !== "none").map((key, index) => {
                return <button
                    className={Styles.button}
                    style={{borderColor: `${statuses[key]}`}}
                    onClick={() => markQuestion(key as any)}
                    id={key}
                    tabIndex={cardAnimationStage >= 2 ? 0 : -1}
                    key={index}>{capitalise(key)}
                </button>
            })}
        </div>
		<SectionSubheading id="Totals">Progress</SectionSubheading>
        <div className={Styles.horizontal}>
            {/* Chart */}
            <div className={Styles.chart}>
                <Doughnut data={config.data} options={config.options} />
            </div>

            {/* Totals */}
            <div className={Styles.totalContainer}>
                <div className={Styles.buttonContainer} style={{justifyContent: "flex-start", gap: "0.5rem"}}>
                    <button className={Styles.button} style={{borderColor: statuses.incorrect}} onClick={() => handleReset()}>{resetClicks === 0 ? "Reset all" : `${interact} again to confirm`}</button>
                    <button className={Styles.button} style={{borderColor: `#6576CC`}} onClick={() => firstQuestion()}>First card</button>
                </div>
                <p className={Styles.total}>{interact} a type to hide it</p>
                { Object.keys(counts).map((key, index) => {
                    const colour = statuses[key]
                    const object = statusesToShow.includes(key) ? <Circle colour={colour} /> : <Ring colour={colour} />;
                    return <button
                        key={index}
                        className={Styles.inlineText}
                        style={{justifyContent: "flex-start", gap: "0.5rem"}}
                        onClick={() => toggleStatus(key)}
                    >
                        {object}
                        <p className={Styles.total}>{counts[key]} {capitalise(key.replace("none", "unmarked").replace("almost", "almost correct"))}</p>
                    </button>
                })}
            </div>
            <div className={Styles.totalContainer}>
                <div style={{display: "flex", gap: "1rem", flexDirection: "column"}}>
                    <div
                            className={Styles.button + " " + Styles.option}
                            onClick={() => toggleQuestionType("questions", !typesToShow.includes("questions"))}
                            style={{borderColor: typesToShow.includes("questions") ? statuses.correct : statuses.incorrect}}
                        >
                            <input type="checkbox" checked={typesToShow.includes("questions")} readOnly />
                            Standard questions
                    </div>
                    <div
                            className={Styles.button + " " + Styles.option}
                            onClick={() => toggleQuestionType("extra", !typesToShow.includes("extra"))}
                            style={{borderColor: typesToShow.includes("extra") ? statuses.correct : statuses.incorrect}}
                        >
                            <input type="checkbox" checked={typesToShow.includes("extra")} readOnly />
                            Extra information
                    </div>
                </div>
            </div>
        </div>
        {/* Keyboard Shortcuts */}
        { isMobile ? null : <div>
            <SectionSubheading id="Shortcuts">Keyboard Shortcuts</SectionSubheading>
            <div className={Styles.horizontal}>
                <div>
                    <p>Left / Right - Previous/Next card</p>
                    <p>F / Space - Flip card</p>
                    <p>1 / 2 / 3 - Mark as correct/almost correct/incorrect</p>
                    <p>R - Reset cards</p>
                    <p>K - First card</p>
                    <p>{modifier} + 1/2/3/4 - Toggle correct/almost correct/incorrect/unmarked types</p>
                    <p>{modifier} + s/e - Toggles standard questions / extra information</p>
                </div>
            </div>
        </div> }
    </>
}
