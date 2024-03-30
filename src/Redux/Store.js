import { applyMiddleware, createStore } from "redux"
import { RootReducer } from "./reducer"
import { thunk } from "redux-thunk"

export const configReducer = () => {
    const store = createStore(RootReducer, applyMiddleware(thunk))

    return store
}