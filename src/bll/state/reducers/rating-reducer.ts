
const InitialState:InitialStateType={
    ratingValue:0.5
}

export type InitialStateType={
    ratingValue:number | null
}

 type GeneralActionType=ReturnType<typeof setRatingValueAC>

export const RatingReducer=(state:InitialStateType=InitialState,action:GeneralActionType)=>{
    switch (action.type) {
        case "SET-RATING-VALUE":{
            return {...state,ratingValue:action.value}
        }

        default:
            return state
    }
}




export const setRatingValueAC=(value:number|null)=>{
    return {
        type:'SET-RATING-VALUE',
        value

    }as const
}