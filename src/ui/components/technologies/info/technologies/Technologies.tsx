import React from 'react';
import {AppStateType, useAppDispatch} from "../../../../../bll/state/store";
import {useSelector} from "react-redux";
import {

    TechnologiesType
} from "../../../../../bll/state/reducers/languages-reducer";


import {ModalWindow} from "../../../../../utils/Modal";
import AddButtonTechnologies from "../../../../../common/button/AddButtonTechnologies";

type TechnologiesPropsType = {
    name: string
}
export const Technologies = ({name}: TechnologiesPropsType) => {

    const technologies = useSelector<AppStateType, TechnologiesType[]>(state => state.languages.technologies)

    return (
        <div>
            <h3>{name}</h3>
            <AddButtonTechnologies title={'Add Technologies'}/>

            {technologies.map((tech) => {
                return <div>


                    <h4 >{tech.title}</h4>

                </div>
            })}
            {<ModalWindow/>}
        </div>
    );
};

