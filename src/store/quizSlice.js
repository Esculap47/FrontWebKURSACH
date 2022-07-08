import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    quizes: [],
    pagination: {}
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuizesAndPagination(state, action) {
            state.quizes = action.payload.results
            state.pagination = action.payload
        },
        setQuizes(state, action){
            state.quizes = action.payload
        },
        addQuiz(state, action){
            state.quizes.push(action.payload)
        },
        removeQuiz(state, action){
            state.quizes = state.quizes.filter(x => x.id !== action.payload)
        }

    }
})

export default quizSlice.reducer