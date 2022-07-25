import {addLanguagesAC, InitialStateType, LanguagesReducer} from "./languages-reducer";
import {v1} from "uuid";


let startState: InitialStateType;
beforeEach(() => {
    startState = {
        languages: [
            {id:v1(),name: 'Java Script'},
        ],
        technologies:[
            {id:v1(),title:"React"}
        ]
    }
})

test('Correctly add new title',()=>{
const action=addLanguagesAC('Python')
const endState= LanguagesReducer(startState,action)
    expect(endState["languages"].length).toBe(2)
    expect(endState["technologies"].length).toBe(1)
})

