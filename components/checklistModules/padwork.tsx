import React from 'react';

import Styles from '../styles/components/title.module.css';
import { belt } from '../../types';

export default function Padwork(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: string[];
}>) {
    return <>
        Some info about the theory cards
    </>
}
