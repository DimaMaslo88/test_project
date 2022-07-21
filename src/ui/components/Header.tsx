import React from 'react';
import style from './Header.module.scss'
import NextWeek from "@material-ui/icons/NextWeek";
import QueryBuilder from "@material-ui/icons/QueryBuilder";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import FileCopy from "@material-ui/icons/FileCopy";
import {CommonButton} from "../../common/button/Button";
import {CommonButtonWhite} from "../../common/button/ButtonInfo";


export const Header = () => {
    return (
        <div className={style.headerBlock}>
            <div className={style.container}>
                <div className={style.photo}>

                </div>
                <div className={style.info}>
                    <h1>{'Dmitry Maslo'}</h1>
                    <h2>{' Junior frontend Developer'}</h2>
                    <p>
                        <NextWeek/> <span>{'Half year - total work experience'}</span>
                    </p>
                    <p>
                        <QueryBuilder/> <span>{'Overlap with your time zone: XX am - XX pm'}</span>
                    </p>
                    <p>
                        <CheckCircleOutline/> <span>{'Availability: ready to start now'}</span>
                    </p>
                    <p>
                        < FileCopy/> <span>{'Full time - 40 hours in week'}</span>
                    </p>

                        {`I’m Dmitry Maslo, Frontend Developer with half a year experience. I have experience in creating SPA with React/Redux/TypeScript.
                        Now I am improving my skills in this direction and expanding them with new technologies.I plan to study React Native.
                        Open for your suggestions.`}

                </div>
                <div className={style.button}>
                    <CommonButtonWhite title={'Share'}/>
                    <CommonButton title={'Book a call'}/>
                </div>


            </div>
        </div>
    );
};

