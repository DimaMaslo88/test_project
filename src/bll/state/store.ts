import {combineReducers, legacy_createStore as createStore} from "redux";
import {LanguagesReducer} from "./reducers/languages-reducer";
import {useDispatch} from "react-redux";
import {RatingReducer} from "./reducers/rating-reducer";
import {ModalReducer} from "./reducers/modal-reducer";


const rootReducer = combineReducers({
    languages: LanguagesReducer,
    rating:RatingReducer,
    modal:ModalReducer
})
export const useAppDispatch = () => useDispatch()
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


// @ts-ignore
window.store = store
