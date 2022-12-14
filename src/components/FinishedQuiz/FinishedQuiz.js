import React from 'react'
import { Button } from '../Button/Button'
import classes from './FinishedQuiz.module.css'
import { Link } from 'react-router-dom'

export const FinishedQuiz = (props) => {
    let total = 0
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((item, index) => {
                        const cls = ['fa-solid']

                        cls.push(classes[props.results[item.id]])

                        if (props.results[item.id] === 'error') {
                            cls.push('fa-xmark')
                        } else {
                            total = total + 1
                            cls.push('fa-check')
                        }

                        return (
                            <li key={index}><strong>{index + 1}.</strong> &nbsp; {item.question} <i className={cls.join(' ')}></i></li>
                        )
                    })
                }
            </ul>
            <p>{total} currect in {props.quiz.length} questions</p>
            <div>
                <Button type='primary' onClick={props.onRetry}>Retry</Button>
                <Link to='/quiz'>
                    <Button type='success'>
                        Quiz list
                    </Button>
                </Link>
            </div>
        </div>
    )
}
