import {v1} from "uuid";

const InitialState: InitialStateType = {
    languages: [
        {name: "JavaScript"},
    ],
    technologies: [
        {title: "React"}
    ],

}

export type InitialStateType = {
    languages: LanguagesType[]
    technologies: TechnologiesType[]
}

export type LanguagesType = {
    // id: string
    name: string
}
export type TechnologiesType = {
    // id: string
    title: string
}

export type GeneralActionType = ReturnType<typeof addLanguagesAC>
    | ReturnType<typeof addTechnologiesAC>

export const LanguagesReducer = (state: InitialStateType = InitialState, action: GeneralActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-NEW-LANGUAGE": {
            debugger
            const newLang = {
                // id:v1(),
                name: action.name
            }
            return {...state, languages: [newLang, ...state.languages]}
        }
        case "ADD-NEW-TECHNOLOGIES": {
            const newTech = {
                // id:v1(),
                title: action.title
            }
            return {...state, technologies: [newTech, ...state.technologies]}
        }
        default:
            return state
    }
}


export const addLanguagesAC = (name: string) => {
    return {
        type: "ADD-NEW-LANGUAGE",
        name,

    } as const
}
export const addTechnologiesAC = (title: string) => {
    return {
        type: "ADD-NEW-TECHNOLOGIES",
        title,

    } as const
}