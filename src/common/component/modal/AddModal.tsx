import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import {addLanguagesAC} from "../../../bll/state/reducers/languages-reducer";
import {useAppDispatch} from "../../../bll/state/store";
import {setModalWindowAC} from "../../../bll/state/reducers/modal-reducer";

 export type AddModalPropsType = {

    closeModal: () => void
}
const AddModal = ({closeModal}: AddModalPropsType) => {
    const dispatch = useAppDispatch()
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
            dispatch(setModalWindowAC(false, 'add'))
            setTitle('')

        }

    }
    return (
        <div>
            <TextField variant="outlined"
                       size={'small'}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       label="Title"

            />
            <IconButton color="primary" onClick={() => addItem(title)}>
                <AddBox/>
            </IconButton>
            <IconButton color="primary" onClick={closeModal}>
                Cancel
            </IconButton>
        </div>
    );
};

export default AddModal;