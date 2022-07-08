import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MdDelete } from 'react-icons/md'

import './Quiz.css'
import { useDispatch } from 'react-redux';
import { deleteQuiz } from '../store/quizAction';
import Pagination from '../pagination/Pagination';
import Sort from './../Sort/Sort';
const Quiz = () => {

    const dispatch = useDispatch()

    const quizes = useSelector(state => state.quiz.quizes)

    const handleDelete = (id) => {
        dispatch(deleteQuiz(id))
    }

    return (
        <div className='quiz'>
            <div className='quiz-buttons'>
                <h2>Результаты выполнения тестов</h2>
                <Sort />
                <Pagination />
            </div>
            {quizes.map(x =>
                <div key={x.id} className='result'>
                    <div>
                        <div>Имя: {x.name}</div>
                        <div>id пользователя: {x.uname}</div>
                        <div>Результат: {x.res}</div>
                        {x.questions.length ? <div>Вопросы: {x.questions}</div> : <></>}
                        <div>Дата прохождения: {x.date_created}</div>
                    </div>
                    <div onClick={() => handleDelete(x.id)} className='delete'>
                        <MdDelete />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;