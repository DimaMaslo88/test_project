import {addLanguagesAC, InitialStateType, LanguagesReducer, LanguagesType} from "./languages-reducer";


let startState: InitialStateType;
beforeEach(() => {
    startState = {
        languages: [
            {name: 'Java Script'},
        ],
        technologies:[
            {title:"React"}
        ]
    }
})

test('Correctly add new title',()=>{
const action=addLanguagesAC('Python')
const endState= LanguagesReducer(startState,action)
    expect(endState["languages"].length).toBe(2)
    expect(endState["technologies"].length).toBe(1)
})

