import React from 'react';

import Styles from '../styles/components/title.module.css';
import { belt, linework } from '../../types';

export default function Linework(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: linework;
}>) {
    return <>
        Some info about linework
    </>
}
