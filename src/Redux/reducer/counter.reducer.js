import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionType";

const initialState = {
    isLoading: false,
    count: 0,
    error: null
}

export const CounterReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case INCREMENT_COUNTER:
            
            return {
                count : state.count + 1
            };

            case DECREMENT_COUNTER:
            
            return {
                count : state.count - 1
            };
    
        default:
            return state;
    }
}