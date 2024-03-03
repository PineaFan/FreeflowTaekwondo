import React from 'react';
import AnimateHeight, { Height } from 'react-animate-height';

import Styles from '../styles/components/collapsibleContent.module.css';


const closedHeight = 100;

export default function CollapsibleContent(props: React.PropsWithChildren<{
    accent?: string
    scrollOnCollapse?: string
}>) {
    const accent = props.accent || "6576CC";
    const [open, setOpen] = React.useState(false);
    const [height, setHeight] = React.useState<Height>(closedHeight)

    const toggleOpen = () => {
        if (open && props.scrollOnCollapse) {
            const element = document.getElementById(props.scrollOnCollapse);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(!open);
        setHeight(open ? closedHeight : 'auto');
    }

    return <div className={Styles.container}>
        <AnimateHeight className={Styles.collapse}
            height={height}
            duration={500}
            easing='ease-in-out'
        >{props.children}</AnimateHeight>
        <div className={Styles.footer}>
            <div className={Styles.fillWidth} style={{backgroundColor: `#${accent}`}} />
            <div
                className={Styles.button}
                onClick={() => toggleOpen()}
                tabIndex={0}
                onKeyUp={(e) => { if (e.key === "Enter" || e.key === " ") toggleOpen() }}
            >
                Show {open ? "less" : "more"}
            </div>
            <div className={Styles.fillWidth} style={{backgroundColor: `#${accent}`}} />
        </div>
    </div>
}
