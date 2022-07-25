import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../bll/state/store";
import { LanguagesType} from "../../../../../bll/state/reducers/languages-reducer";
import {ModalWindow} from "../../../../../utils/Modal";
import AddButtonLanguage from "../../../../../common/button/AddButtonLanguage";

type LanguagesPropsType = {
    name: string
}
export const Languages = ({name}: LanguagesPropsType) => {

    const languages = useSelector<AppStateType, LanguagesType[]>(state => state.languages.languages)


    return (

        <div>
            <h3>{name}</h3>
          <AddButtonLanguage title={'Add Language'}/>

            {languages.map((m) => {
                return <div key={m.id} >


                    <h4>{m.name}</h4>

                </div>
            })}
            {<ModalWindow/>}
        </div>

    );


};

