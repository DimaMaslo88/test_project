import React from 'react';
import style from './RatingInfo.module.scss'
import Items from "../../component/Items";
import {CommonButton} from "../../button/Button";

export const RatingInfo = () => {
    return (
        <div className={style.header}>
            <div className={style.main}>
                <h2>{'Quiz'}</h2>
                <CommonButton title={'See Quiz Results'}/>
            </div>
            <div className={style.items}>
                <Items title={'Dom'}/>
                <Items title={'HTML'}/>
                <Items title={'CSS'}/>
                <Items title={'JS'}/>
                <Items title={'React Component'}/>
            </div>


        </div>
    );
};

