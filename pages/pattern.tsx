import Header from '../components/header';

import untypedPatterns from '../public/data/patterns.json';
import { pattern } from '../types';

const patterns: Record<string, pattern> = untypedPatterns;

export default function Page() {
    return <>
        <Header
            title={"Select a pattern"}
            subtitle={"Pick a pattern to view"}
            description="Here's a list of all the patterns."
            colour="F27878"
            backLink={"/"}
            loading={true}
        /><br />
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            {
                Object.keys(patterns).map((pattern, index) => {
                    return <a key={index} href={`/pattern/${pattern}`} style={{width: "100%", textAlign: "center"}}>{patterns[pattern].name}</a>
                })
            }
        </div>
    </>;
}
