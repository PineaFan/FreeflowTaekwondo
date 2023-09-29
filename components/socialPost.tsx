import React from 'react';

import Styles from '../styles/components/socialPost.module.css';
import Image from 'next/image';

export function SocialPost(props: React.PropsWithChildren<{}>) {
    return <div className={Styles.container}>
        <div className={Styles.post}>
            <Image height={64} width={64} className={Styles.image} src="/images/SOTY/logo.png" alt="" />
            <div className={Styles.right}>
                <div className={Styles.top}>Stacey Weatherer</div>
                <div className={Styles.bottom}>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
}
