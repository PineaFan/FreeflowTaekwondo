import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import untypedBelts from "../public/data/belts.json";
import untypedTheory from "../public/data/theory.json";
import { belt, theory } from "../types";
import Styles from "../styles/pages/flashcard.module.css";
import Link from "next/link";
import Header from "../components/header";
import { NoBelt } from "../components/beltUtils";
import { LeftArrow, RightArrow } from "../components/icons";

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

function questionSide(question: theory["questions"][0], accent: string) {
    return <>
        <p className={Styles.text}>{question.prompt}</p>
        { typeInstructions[question.responseType] === null ? null : <>
            <p className={Styles.text}>{typeInstructions[question.responseType] || ""}</p>
        </> }
    </>
}
function answerSide(question: theory["questions"][0], accent: string) {
    return <>
        <div className={Styles.hr} style={{backgroundColor: `${accent}`}} />
        <p className={Styles.text}>{question.answer}</p>
    </>
}

const capitalise = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Flashcards() {
    const [belt, _setBelt] = useState("white-senior");  // The user's belt
    const [beltChose, setBeltChosen] = useState(false);  // Whether the user has chosen a belt
    const [currentQuestion, setCurrentQuestion] = useState(0);  // The number of the current question
    const [cardAnimationStage, setCardAnimationStage] = useState(0);  // 0 for front (question), 2 for back (answer), 1 for q-> a, 3 for a-> q
    const [isShaking, setIsShaking] = useState(false);  // Whether the card is shaking
    const [markedAs, setMarkedAs] = useState<Record<string, "none" | "correct" | "incorrect" | "almost">>({});  // The user's answers
    const [resetClicks, setResetClicks] = useState(0);  // The number of times the user has clicked "reset all"

    const { reward: correctReward, isAnimating: isCorrectAnimating } = useReward("correct", "confetti", {
        colors: Object.keys(statuses).filter((key) => key !== "none").map((key) => statuses[key]),
        elementCount: 50,
    });
    const { reward: almostReward, isAnimating: isAlmostAnimating } = useReward("almost", "confetti", {
        colors: [statuses["almost"]],
        elementCount: 25
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
        description="Test your knowledge of the theory for your next grading."
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

    let cardSections = ["questions"];
    let questionTypes: string[] = [];
    if (cardSections.length === 0) { cardSections = ["questions"]; }
    if (cardSections.includes("questions")) { questionTypes = ["translate", "exact", "typo", "list", "GPT"] }

    let filteredQuestions: theory["questions"] = [];
    if (cardSections.includes("questions")) {
        filteredQuestions = filteredQuestions.concat(questions);
    }
    if (cardSections.includes("extra")) {
        filteredQuestions = filteredQuestions.concat(extra);
    }
    // Get all questions that aren't ignored, and a type the user wants
    filteredQuestions = filteredQuestions.filter((x) => (!ignoredTypes.includes(x.responseType)) && (questionTypes.includes(x.responseType)));

    const shakeCard = () => {
        console.log("Shaking card");
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
        }, 600);
    }
    const flipCard = () => {
        if (!filteredQuestions[currentQuestion].answer) {
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
    const nextQuestion = () => {
        if (cardAnimationStage % 2 === 0) {
            // Rewrite this to flip the card too
            setCardAnimationStage(cardAnimationStage + 1);
            // Wait 0.3s
            setTimeout(() => {
                setTimeout(() => {
                    setCardAnimationStage(0);
                }, 300);
                setCardAnimationStage(3);
                setCurrentQuestion((currentQuestion + 1) % filteredQuestions.length);
            }, 300);
        }
    }
    const previousQuestion = () => {
        if (cardAnimationStage % 2 === 0) {
            // Rewrite this to flip the card too
            setCardAnimationStage(cardAnimationStage + 1);
            // Wait 0.3s
            setTimeout(() => {
                setTimeout(() => {
                    setCardAnimationStage(0);
                }, 300);
                setCardAnimationStage(3);
                setCurrentQuestion((currentQuestion - 1 + filteredQuestions.length) % filteredQuestions.length);
            }, 300);
        }
    }
    const saveMarkedAsToLocalStorage = (markedAs: Record<string, "none" | "correct" | "incorrect" | "almost">) => {
        localStorage.setItem("markedAs", JSON.stringify(markedAs));
    }
    const markQuestion = (mark: "none" | "correct" | "incorrect" | "almost") => {
        if (mark === "correct" && !isCorrectAnimating) {
            correctReward();
        } else if (mark === "almost" && !isAlmostAnimating) {
            almostReward();
        }
        setMarkedAs({...markedAs, [filteredQuestions[currentQuestion].prompt]: mark});
        saveMarkedAsToLocalStorage({...markedAs, [filteredQuestions[currentQuestion].prompt]: mark});
    }
    const handleReset = () => {
        setResetClicks(resetClicks + 1);
        if (resetClicks === 1) {
            setMarkedAs({});
            saveMarkedAsToLocalStorage({});
            setResetClicks(0);
        }
    }

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
            previousQuestion();
        } else if (event.key === "ArrowRight") {
            nextQuestion();
        } else if (event.key === " " || event.key === "Enter") {
            flipCard();
        } else if (event.key === "x") {
            shakeCard();
        }
    }
    document.onkeydown = handleKeyPress;

    // Generate colour and cards
    const accent = statuses[markedAs[filteredQuestions[currentQuestion].prompt] || "none"];

    const generatedQuestionSide = questionSide(filteredQuestions[currentQuestion], accent);
    const generatedAnswerSide = answerSide(filteredQuestions[currentQuestion], accent);

    // Count the number of each status
    const counts: Record<string, number> = { "correct": 0, "almost": 0, "incorrect": 0, "none": 0 };
    const questionNames: string[] = filteredQuestions.map((x) => x.prompt);
    Object.keys(markedAs).forEach((key) => {
        if (questionNames.includes(key)) {
            counts[markedAs[key]]++;
        }
    });
    // Count the number of filteredQuestions that are "none"
    filteredQuestions.forEach((toCheck) => {
        if (!(toCheck.prompt in markedAs)) {
            counts["none"]++;
        }
    });

    // Chart config
    const config = {
        type: "doughnut",
        data: {
            labels: Object.keys(counts).map((key) => capitalise(key)),
            datasets: [{
                label: " Questions",
                data: Object.values(counts),
                backgroundColor: Object.values(statuses),
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
            <p className={Styles.count}>{currentQuestion + 1} / {filteredQuestions.length}</p>
            <div className={Styles.control}>
                <div className={Styles.inlineText} onClick={() => previousQuestion()}><LeftArrow />Back</div>
                <div className={Styles.inlineText} onClick={() => flipCard()}>Flip</div>
                <div className={Styles.inlineText} onClick={() => nextQuestion()}>{((currentQuestion + 1) === Object.keys(filteredQuestions).length) ? "Restart" : "Next"}<RightArrow /></div>
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
            } onClick={() => flipCard()}>
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
                return <p
                    className={Styles.button}
                    style={{borderColor: `${statuses[key]}`}}
                    onClick={() => markQuestion(key as any)}
                    id={key}
                    key={index}>{capitalise(key)}
                </p>
            })}
        </div>

        {/* Chart */}
        <div className={Styles.chart}>
            <Doughnut data={config.data} options={config.options} />
        </div>

        {/* Totals */}
        <SectionSubheading id="Totals">Progress</SectionSubheading>
        <div className={Styles.center}>
            <p className={Styles.button} style={{borderColor: `#`}} onClick={() => handleReset()}>{resetClicks === 0 ? "Reset all" : "Click again to confirm"}</p>
            <div className={Styles.totals}>
                { Object.keys(counts).filter(x => counts[x] > 0).map((key, index) => {
                    return <p className={Styles.total} key={index}>{counts[key]} {capitalise(key.replace("none", "unmarked").replace("almost", "almost correct"))}</p>
                })}
            </div>
        </div>
    </>
}
