import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";

const rootReducer = combineReducers({
    quiz: quizSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
