import React from 'react';

import Header from '../components/header';
import Styles from '../styles/pages/search.module.css';
import { SectionHeading } from '../components/title';
import { searchClass, searchPatterns, searchTranslate } from './api/search';


function SearchResult(props: React.PropsWithChildren<{title: string, description: string, url?: string}>) {
    return <><span>
        <a href={props.url}>{props.title}</a> - {props.description}
    </span><br /></>;
}


export default function Search() {
    const [search, setSearch] = React.useState('');

    const patternResults = searchPatterns(search);
    const classResults = searchClass(search);
    const theoryResults = searchTranslate(search);

    // Each needs to be formatted to be displayed in the search results, with a title and a description.
    const patterns = patternResults.map(p => ({url: `/pattern/${p.name}`, title: p.name, description: p.description}));
    const classes = classResults.map(c => ({
        title: `${c.location_name}`,
        description: `${c.day}s in ${c.building_name}, ${c.postcode}`
    }));
    const theory = theoryResults.map(t => ({title: t.prompt, description: t.answer}));


    return <>
        <Header
            title="Search"
            description="Search through all the theory, patterns and classes."
            backLink='/'
        />
        <i>{"This page is in development - It doesn't look great yet, but it's functional!"}</i><br />
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Theory, pattern, or class'/>
        <div className={Styles.searchResults}>
            { patterns.length ? <>
                <SectionHeading id="Patterns">Patterns</SectionHeading>
                {patterns.map((p, i) => <SearchResult key={i} {...p} />)}
            </> : null }
            { classes.length ? <>
                <SectionHeading id="Classes">Classes</SectionHeading>
                {classes.map((c, i) => <SearchResult key={i} {...c} />)}
            </> : null }
            { theory.length ? <>
                <SectionHeading id="Theory">Theory</SectionHeading>
                {theory.map((t, i) => <SearchResult key={i} {...t} />)}
            </> : null }
        </div>
    </>
};
