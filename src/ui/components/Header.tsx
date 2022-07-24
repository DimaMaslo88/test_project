import React from 'react';
import style from './Header.module.scss'
import NextWeek from "@material-ui/icons/NextWeek";
import QueryBuilder from "@material-ui/icons/QueryBuilder";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import FileCopy from "@material-ui/icons/FileCopy";
import {CommonButton} from "../../common/button/Button";
import {CommonButtonWhite} from "../../common/button/ButtonInfo";
import {TitleOutlined} from "@material-ui/icons";
import Title from "../../common/title/Title";


export const Header = () => {
    return (
        <div className={style.headerBlock}>
            <div className={style.container}>
                <div className={style.photo}>

                </div>
                <div className={style.info}>
                    <h1>{'Dmitry Maslo'}</h1>
                    <h2><Title title={'Junior Frontend Developer'}/></h2>
                    <p>
                        <NextWeek/><Title title={'Half year - total work experience'}/>
                    </p>
                    <p>
                        <QueryBuilder/>
                        <Title title={'Overlap with your time zone: XX am - XX pm'}/>

                    </p>
                    <p>
                        <CheckCircleOutline/>
                        <Title title={'Availability: ready to start now'}/>

                    </p>
                    <p>
                        < FileCopy/>
                        <Title title={'Full time - 40 hours in week'}/>

                    </p>

                    <p><Title title={`I’m Dmitry Maslo, Frontend Developer with half a year experience. I have experience in creating SPA with React/Redux/TypeScript.
                        Now I am improving my skills in this direction and expanding them with new technologies.I plan to study React Native.
                        Open for your suggestions.`}/>
                    </p>

                </div>
                <div className={style.button}>
                    <CommonButtonWhite title={'Share'}/>
                    <CommonButton title={'Book a call'}/>
                </div>


            </div>
        </div>
    );
};

