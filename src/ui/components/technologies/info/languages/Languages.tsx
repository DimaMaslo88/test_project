import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../bll/state/store";
import {LanguagesType} from "../../../../../bll/state/reducers/languages-reducer";

export const Languages = () => {
    const languages=useSelector<AppStateType,LanguagesType[]>(state=>state.languages.languages)
    return (
        <div>
            {languages.map(m=>{
                return <span>{m.name}</span>
            })}
            <input/>
            <button>Add</button>
        </div>
    );
};

