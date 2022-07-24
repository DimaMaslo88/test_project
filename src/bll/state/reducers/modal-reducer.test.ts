import { InitialStateType, ModalReducer, setModalWindowAC} from "./modal-reducer";

let startState:InitialStateType;
beforeEach(()=>{
    startState={
        isOpen:false,
        nameComponent: null
    }
})

test('should be correctly open modal window',()=>{
    const action=setModalWindowAC(true,'add')
    const endState=ModalReducer(startState,action)
    expect(endState["isOpen"]).toBe(true)
    expect(endState["nameComponent"]).toBe('add')

})