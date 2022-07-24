import React, {KeyboardEvent, ChangeEvent, useState} from 'react';
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "../../../../../bll/state/store";
import {addLanguagesAC, LanguagesType} from "../../../../../bll/state/reducers/languages-reducer";
import TextField from "@material-ui/core/TextField";
import {IconButton} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type LanguagesPropsType = {
    name: string
}
export const Languages = ({name}: LanguagesPropsType) => {
    const dispatch = useAppDispatch()
    const languages = useSelector<AppStateType, LanguagesType[]>(state => state.languages.languages)
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
            dispatch(addLanguagesAC(name))
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
        {languages.map((m) => {
            return <div>


                <span>{m.name}</span>

            </div>
        })}
    </div>
)
    ;
};

