import {first, second, operator} from "./action";

const initialState= { First:" ", Second:" ", Operator:" "}
export default function Reducer(state=initialState, action)
{
    switch(action.type)
    {
        case first:
            return{...state, First:action.payload};
            break
        case second:
            return{...state, Second:action.payload};
            break
        case operator:
            return{...state, Operator:action.payload};
            break
        default:
            return state;
    }
}

