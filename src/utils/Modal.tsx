import {Box, Fade, Modal} from "@mui/material";
import {AppStateType, useAppDispatch} from "../bll/state/store";
import {useSelector} from "react-redux";
import {ComponentType, setModalWindowAC} from "../bll/state/reducers/modal-reducer";
import AddModal from "../common/component/modal/AddModal";
import AddModalTech from "../common/component/modal/AddModalTech";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalWindow = () => {
    const dispatch = useAppDispatch()
    const isOpen = useSelector<AppStateType, boolean>(state => state.modal.isOpen)
    const nameComponent = useSelector<AppStateType, ComponentType>(state => state.modal.nameComponent)


    const handleModalClose = () => {
        dispatch(setModalWindowAC(false, 'add'))
    };


    return (
        <div>

            <Modal

                open={isOpen}
                onClose={handleModalClose}

            >
                <Fade in={isOpen}>
                    <Box sx={style}>

                        {nameComponent === 'add' && <AddModal
                            closeModal={handleModalClose}

                        /> }
                        {nameComponent === 'addTech' && <AddModalTech
                            closeModal={handleModalClose}

                        />
                        }

                    </Box>
                </Fade>
            </Modal>

        </div>
    );
}