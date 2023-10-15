import React from 'react';

import Styles from '../../styles/components/checklistModule/padwork.module.css';
import { belt } from '../../types';

export default function Padwork(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: string[];
}>) {
    return <div className={Styles.container}>
        <div className={Styles.center}>
            {
                props.data.map((padwork, index) => <p key={index} className={Styles.text}>{padwork}.</p>)
            }
        </div>
    </div>
}
