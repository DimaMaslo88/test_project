import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {AppStateType, useAppDispatch} from "../../../../../bll/state/store";
import {useSelector} from "react-redux";
import {
    addLanguagesAC,
    addTechnologiesAC,
    LanguagesType,
    TechnologiesType
} from "../../../../../bll/state/reducers/languages-reducer";
import TextField from "@material-ui/core/TextField";
import {IconButton} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";
type TechnologiesPropsType={
    name:string
}
export const Technologies = ({name}:TechnologiesPropsType) => {
    const dispatch = useAppDispatch()
    const technologies = useSelector<AppStateType, TechnologiesType[]>(state => state.languages.technologies)
    const [title, setTitle] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        debugger
        if (e.key === 'Enter') {
            addItem('')
        }
    }
    const addItem = (name: string) => {
        if (name.trim() !== '') {
            dispatch(addTechnologiesAC(name))
            setTitle('')
        }

    }
    return (
        <div>
            <h3>{name}</h3>
            <TextField variant="outlined"

                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       label="Title"

            />
            <IconButton color="primary" onClick={() => addItem(title)}>
                <AddBox/>
            </IconButton>
            {technologies.map((tech) => {
                return <div>


                    <span>{tech.title}</span>

                </div>
            })}
        </div>
    );
};

