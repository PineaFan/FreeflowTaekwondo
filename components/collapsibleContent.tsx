import React from 'react';

import Styles from '../styles/components/collapsibleContent.module.css';

export default function CollapsibleContent(props: React.PropsWithChildren<{
    accent?: string
}>) {
    const accent = props.accent || "6576CC";
    const [open, setOpen] = React.useState(false);

    return <div className={Styles.container}>
        <div className={Styles.collapse}>{props.children}
            <div className={Styles.footer}>
                <div className={Styles.fillWidth} style={{backgroundColor: `#${accent}`}} />
                <div className={Styles.button} onClick={() => { setOpen(!open) }}>
                    Show {open ? "less" : "more"}
                </div>
                <div className={Styles.fillWidth} style={{backgroundColor: `#${accent}`}} />
            </div>
        </div>
    </div>
}
