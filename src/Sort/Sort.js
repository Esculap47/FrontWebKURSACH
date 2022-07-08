import React, { useState } from 'react';
import { MdOutlineArrowCircleDown, MdOutlineArrowCircleUp } from 'react-icons/md'


import './Sort.css'
import { useEffect } from 'react';
import { quizSlice } from './../store/quizSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Sort = () => {

    const dispatch = useDispatch()
    const quizes = useSelector(state => state.quiz.quizes)

    const [sort, setSort] = useState('')

    useEffect(() => {
        let temp = [...quizes]
        if (sort === 'A-z') {
            temp.sort((a, b) => a.name.localeCompare(b.name))
            dispatch(quizSlice.actions.setQuizes(temp))
        }
        else if (sort === 'Z-a'){
            temp.sort((a, b) => b.name.localeCompare(a.name))
            dispatch(quizSlice.actions.setQuizes(temp))
        }
    }, [sort])

    const change = () => {
        if (sort === '') {
            setSort('A-z')
        }
        else {
            if (sort === 'A-z') {
                setSort('Z-a')
            }
            else setSort('A-z')
        }
    }

    return (
        <div className='sort'>
            <span>Сортировка по имени теста:</span>
            <button onClick={change}>
                {sort === 'A-z'
                    ?
                    <MdOutlineArrowCircleDown />
                    :
                    <MdOutlineArrowCircleUp />
                }
            </button>

        </div>
    );
};

export default Sort;