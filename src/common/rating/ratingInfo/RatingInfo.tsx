import React from 'react';
import {CommonButtonWhite} from "../../button/ButtonInfo";
import style from './RatingInfo.module.scss'

import Items from "../../component/Items";

export const RatingInfo = () => {
    return (
        <div className={style.header}>
            <div className={style.main}>
                <h2>{'Quiz'}</h2>
                <CommonButtonWhite title={'See Quiz Results'}/>
            </div>
            <div className={style.items}>
            <Items title={'Dom'} />
            <Items title={'HTML'} />
            <Items title={'CSS'} />
            <Items title={'JS'} />
            <Items title={'React Component'} />
            </div>


        </div>
    );
};

