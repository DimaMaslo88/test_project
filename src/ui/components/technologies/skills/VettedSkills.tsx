import React from 'react';
import style from './VettedSkills.module.scss'
import {SkillPage} from "./skill/SkillPage";

export const VettedSkills = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.skills}>
            <h2>{"Vetted Skills"}</h2>
                    <div>
                        <SkillPage/>
                    </div>

            </div>
            </div>
        </div>
    );
};

