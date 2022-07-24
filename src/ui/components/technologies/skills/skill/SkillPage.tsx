import React from 'react';
import {Skill} from "./Skill";

export const SkillPage = () => {
    return (
        <div>
           <h3> {'This developer passed 3+ hours of rigorous for the following skills'}</h3>
            <p>
                {'What is a Vetted skill? Learn more about our skill assessment methodology '}
            </p>
            <Skill
                    title={'React'}
            />
        </div>
    );
};

