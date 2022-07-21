import {combineReducers, legacy_createStore as createStore} from "redux";
import {LanguagesReducer} from "./reducers/languages-reducer";
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    languages: LanguagesReducer
})
export const useAppDispatch = () => useDispatch()
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


// @ts-ignore
window.store = store
