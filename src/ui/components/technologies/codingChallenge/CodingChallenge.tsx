import React from 'react';
import {CommonButtonWhite} from "../../../../common/button/ButtonInfo";
import style from './CodingChallenge.module.scss'
import Items from "../../../../common/component/Items";
import Title from "../../../../common/title/Title";
export const CodingChallenge = () => {
    return (
        <div className={style.header}>
            <div className={style.main}>
                <h2><Title title={'Coding Challenge'}/></h2>
                <CommonButtonWhite title={'See Code'}/>


            </div>
            <div className={style.items}>
                <Items title={'Sorting Algorithm'} />
                <Items title={'String and Arrays'} />
                <Items title={'Complexity'} />

            </div>
        </div>
    );
};

