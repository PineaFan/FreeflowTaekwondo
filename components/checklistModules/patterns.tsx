import React from 'react';

import Styles from '../styles/components/title.module.css';
import { belt, pattern } from '../../types';

export default function Patterns(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: pattern[];
}>) {
    return <>
        Some info about the theory cards
    </>
}
