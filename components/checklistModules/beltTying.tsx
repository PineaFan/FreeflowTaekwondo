import React from 'react';

import Styles from '../styles/components/title.module.css';
import { belt } from '../../types';

export default function BeltTying(props: React.PropsWithChildren<{
    belt: string;
    beltObject: belt;
    data: {}
}>) {
    return <>
        Some info about belt tying
    </>
}
