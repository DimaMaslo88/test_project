import  Button  from "@material-ui/core/Button";
import  Stack  from "@mui/material/Stack";
import { setModalWindowAC } from "../../bll/state/reducers/modal-reducer";
import {useAppDispatch} from "../../bll/state/store";

type AddButtonPropsType={
    title:string
}
export default function AddButtonLanguage({title}:AddButtonPropsType) {
    const dispatch=useAppDispatch()
    const openModelWindowHandler=()=>{

        dispatch(setModalWindowAC(true,'add'))

    }

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={openModelWindowHandler}>{title}</Button>


        </Stack>
    );
}