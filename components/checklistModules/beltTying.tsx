import React from 'react';

import { belt } from '../../types';


const sections = [
    [
        "The belt (Ti) is tied twice around the body with a knot or once dependant on size in front and in such a way that the material is flat across the spine.",
        "The ends should be of equal length at the front when you are finished.",
        "The belt should rest comfortably low on the hips.",
        "Do not tie too tight or high because your breathing will be impeded and your sense of centre will be distorted."
    ],
    [
        "Begin with one end of the belt hanging down at your left side. Pass the belt across your body and around to the back as if to pull your uniform or dobok closed.",
        "Retrieve the belt at the left side and pass across the front and around the back again.",
        "Take the end that has been travelling to the front and cross it down on top of all the belt material at the centre.",
        "Tuck that same end under all the layers of belt and pull through and up. Now look to see if the two ends are of equal length and adjust by carefully pulling back and forth on both ends. Go back a step if you have to.",
        "With the two ends hanging equally, twist the underneath end one half turn inward.",
        "Cross the upper end (the original travelling end) over and then under the lower end.",
        "Pull through and tighten by pulling both ends equally to the outside."
    ]
]

export default function BeltTying(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: {}
}>) {
    return <>
        <div id={"belt"} style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div>
                {
                    sections.map((subsection, id) => {
                        return <React.Fragment key={id}>{subsection.map((line, index) => {
                            return <p key={index}>{(id === 0) ? "" : ((index + 1).toString() + ". ")}{line}</p>
                        })}</React.Fragment>
                    })
                }
            </div>
        </div>
    </>
}
