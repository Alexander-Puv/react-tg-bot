import React from 'react'
import cl from './Button.module.css';

export const Button = (props) => {
    return (
        <button className={cl.button + ` ${props.className}`} {...props} />
    )
}