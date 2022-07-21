import React from 'react';
import { Stacks } from './infoStack/Stacks';
import style from "./Technologies.module.scss"
import {Information} from "./info/Information";


export const TechnologiesStack = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.stack}>
                    <div>
                        <Stacks title={'Technologies stack'}/>
                    </div>
                <div>
                    <Information/>
                </div>

                </div>
            </div>

        </div>
    );
};

