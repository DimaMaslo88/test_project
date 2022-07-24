import React from 'react';
import {Skill} from "./Skill";
import Title from "../../../../../common/title/Title";

export const SkillPage = () => {
    return (
        <div>
           <h3><Title title={'This developer passed 3+ hours of rigorous for the following skills'}/></h3>
            <p>
               <Title title={'What is a Vetted skill? Learn more about our skill assessment methodology '}/>
            </p>
            <Skill
                    title={'React'}
            />
        </div>
    );
};

