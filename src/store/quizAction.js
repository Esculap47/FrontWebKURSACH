import axios from 'axios'
import { API_KEY } from './../config';
import { quizSlice } from './quizSlice';

export const getQuizes = () => (dispatch) => {
    try {
        axios.get(`${API_KEY}/sentry-debug/api/quizzes/`)
            .then((res) => dispatch(quizSlice.actions.setQuizesAndPagination(res.data)))
    } catch (e) {

    }
}
export const getPage = (page) => (dispatch) => {
    try {
        axios.get(page)
        .then((res) => dispatch(quizSlice.actions.setQuizesAndPagination(res.data)))
    } catch (e) {

    }
}

export const deleteQuiz = (id) => (dispatch) => {
    try {
        axios.delete(`${API_KEY}/sentry-debug/api/quizzes/${id}/`)
            .then((res) => dispatch(quizSlice.actions.removeQuiz(id)))
    } catch (e) {

    }
}