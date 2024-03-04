import { useRouter } from 'next/router'
import Header from '../../components/header';

import untypedBelts from '../../public/data/belts.json';
import untypedPatterns from '../../public/data/patterns.json';
import { belt, pattern } from '../../types';
import Patterns from '../../components/checklistModules/patterns';
import { searchPatterns } from '../api/search';

const patterns: Record<string, pattern> = untypedPatterns;
const belts: Record<string, belt> = untypedBelts;

export default function Page() {
    const router = useRouter()
    // Check if the router has loaded or if the user just didn't select a pattern
    // Warning: Text content did not match. Server: "Searching pattern list" Client: "Select a pattern"

    if (!router.isReady) return <Header
        title="Searching pattern list"
        description="This shouldn't take long."
        colour="F27878"
        loading={true}
        backLink={"/home"}
    />;
    const toSearch = (router.query.pattern ? router.query.pattern : "") as string
    // Find if the pattern is in the list of patterns
    const patternChose = searchPatterns(toSearch)[0];
    const patternProvided = toSearch !== "";

    if (Object.keys(patternChose).length === 0) return <>
        <Header
            title={patternProvided ? "Pattern not found" : "Select a pattern"}
            subtitle={patternProvided ? `Searched pattern list for "${toSearch}"` : "Pick a pattern to view"}
            description="Here's a list of all the patterns."
            colour="F27878"
            backLink={"/home"}
            loading={router.query.pattern === "loading" || !patternProvided}
        /><br />
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            {
                Object.keys(patterns).map((pattern, index) => {
                    return <a key={index} href={`/pattern/${pattern}`} style={{width: "100%", textAlign: "center"}}>{patterns[pattern].name}</a>
                })
            }
        </div>
    </>;
    const patternObject: pattern = patterns[(patternChose as { id: string}).id]
    // Get the key of the pattern with this name
    const internalPatternName = Object.keys(patterns).find(key => patterns[key] === patternObject) || "";
    // Find the lowest belt that has the pattern
    const beltList = Object.keys(belts);
    let beltChose: belt | undefined;
    let internalBeltName: string | undefined;
    for (let i = 0; i < beltList.length; i++) {
        const belt = belts[beltList[i]] as belt;
        if (belt.requirements.patterns && belt.requirements.patterns.includes(internalPatternName)) {
            beltChose = belt;
            internalBeltName = beltList[i];
            break;
        }
    }
    beltChose = beltChose || belts["black-stripe"] as belt;
    return <>
        <Header
            title={`Pattern ${patternObject.name}`}
            description={`Here's what you need to know about ${patternObject.name}.`}
            colour={beltChose!.stripe}
            backLink={"/checklist"}
        />
        <Patterns belt={internalBeltName!} beltObject={beltChose!} data={[patternObject]} fullPage={true}/>
    </>
}
