import React, { useEffect } from 'react';

import Header from '../components/header';
import Styles from '../styles/pages/search.module.css';
import { searchPatterns, searchTranslate, searchClass } from './api/search';


function SearchResult(props: React.PropsWithChildren<{title: string, description: string, url?: string}>) {
    return <a className={Styles.listElement} href={props.url}>
        <p className={Styles.main}>{props.title}</p>
        <p
            className={Styles.subText}
            style={{color: props.url ? "#6576CC" : "#424242"}}
        >{props.description}</p>
    </a>;
}


export default function Search() {
    const [search, setSearch] = React.useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            const q = url.searchParams.get('q');
            setSearch(q || "");
        }
    }, []);

    const patternResults = searchPatterns(search);
    const translateResults = searchTranslate(search);
    const classResults = searchClass(search);

    // Each needs to be formatted to be displayed in the search results, with a title and a description.
    const patterns = patternResults.map(p => ({url: `/pattern/${p.name}`, title: p.name, description: p.description}));
    const translate = translateResults.map(t => ({title: t.prompt, description: t.answer}));
    const classes = classResults.map(c => ({
        url: `/#classes`,
        title: `${c.location_name} (${c.day})`,
        description: `${c.classes.length} classes at ${c.building_name} on ${c.day}s starting from ${c.classes[0].start}`
    }));
    const totalResults = [...patterns, ...classes, ...translate];

    // On search, update the URL to reflect the new search query.
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.set('q', search);
            window.history.replaceState({}, '', url.toString());
        }
    }, [search]);

    // If there are no results, display a message.
    const error = <SearchResult title="No results found" description="Try a different search term or check for spelling mistakes" />

    return <>
        <Header
            title="Search"
            description="Search through all the theory, patterns and classes."
            backLink='/'
        />
        <div className={Styles.container}>
            <div className={Styles.center}>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder='Theory, pattern, or class'
                    className={Styles.searchBar}
                />
                <div className={Styles.searchResults}>
                    { totalResults ? <>
                        {totalResults.map((p, i) => <SearchResult key={i} {...p} />)}
                    </> : null }
                    { (!totalResults.length && search) && error }
                </div>
            </div>
        </div>
    </>
};
