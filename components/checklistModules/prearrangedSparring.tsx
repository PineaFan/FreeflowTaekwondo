import React from 'react';

import Styles from '../styles/components/title.module.css';
import { belt, prearrangedSparring } from '../../types';

export default function PrearrangedSparring(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: prearrangedSparring;
}>) {
    return <>
        Some info about the theory cards
    </>
}
