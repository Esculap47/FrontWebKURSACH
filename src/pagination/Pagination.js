import React from 'react';
import { MdArrowForward, MdArrowBack } from 'react-icons/md'

import './Pagination.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPage } from '../store/quizAction';

const Pagination = () => {

    const dispatch = useDispatch()

    const pages = useSelector(state => state.quiz.pagination)

    return (
        <div className='buttons'>
            <button onClick={() => dispatch(getPage(pages.previous))} disabled={pages.previous === null ? true : false}><MdArrowBack /></button>
            <button onClick={() => dispatch(getPage(pages.next))} disabled={pages.next === null ? true : false}><MdArrowForward /></button>
        </div>
    );
};

export default Pagination;