import {v1} from "uuid";

const InitialState: InitialStateType = {
    languages: [
        {id: v1(), name: "JavaScript"},

        {id: v1(), name: 'React'}

    ]
}

 export type InitialStateType = {
    languages: LanguagesType[]
}

 export type LanguagesType = {
    id: string
    name: string
}

export type GeneralActionType = ReturnType<typeof addLanguagesAC>

export const LanguagesReducer = (state: InitialStateType = InitialState, action: GeneralActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-NEW-LANGUAGE": {
            const newLang = {
                id:v1(),
                name: action.name
            }
            return {...state,languages:state.languages.map(m=>m.id !== action.id?{...newLang,...m}:m)}
        }
        default:
            return state
    }
}


export const addLanguagesAC = (name:string,id:string) => {
    return {
        type: "ADD-NEW-LANGUAGE",
       name,
        id
    } as const
}