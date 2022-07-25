import {InitialStateType, RatingReducer, setRatingValueAC} from "./rating-reducer";


let startState:InitialStateType;
beforeEach(()=>{
    startState={
        ratingValue:0.5
    }
})

test('rating must be change correctly',()=>{
    const action=setRatingValueAC(5)
    const endState=RatingReducer(startState,action)
    expect(endState["ratingValue"]).toBe(5)
})