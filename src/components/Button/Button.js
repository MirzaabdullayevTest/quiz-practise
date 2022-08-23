import React from 'react'
import classes from './Button.module.css'

export const Button = (props) => {
    const cls = [classes.Button]

    if (props.type) {
        cls.push(classes[props.type])
    }
    return (
        <button className={cls.join(' ')} onClick={props.onClick}>{props.children}</button>
    )
}
