const initialState = {
    isOpen: false,
    nameComponent: null,


}
export type InitialStateType = {
    isOpen: boolean
    nameComponent: ComponentType

}

export type ComponentType = 'add'
    | 'addTech'
    | null

export type ModalActionType = SetModalWindowType

export const ModalReducer = (state: InitialStateType = initialState, action: ModalActionType): InitialStateType => {
    switch (action.type) {
        case "SET-MODAL-WINDOW": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}


export type SetModalWindowType = ReturnType<typeof setModalWindowAC>
export const setModalWindowAC = (isOpen: boolean, nameComponent: ComponentType) => {
    return {
        type: "SET-MODAL-WINDOW",
        payload: {
            isOpen,
            nameComponent,

        }
    } as const
}