import React, { useEffect } from 'react'
import { Button } from '../Button/Button';
import cl from './Header.module.css';
const tg = window.Telegram.WebApp;

export const Header = () => {
    useEffect(() => {
        tg.ready();
    })

    const close = () => {
        tg.close()
    }

    return (
        <div className={cl.header}>
            <Button onClick={close}>Close</Button>
            <span className={cl.username}>
                {tg.initDataUnsafe?.s}
            </span>
        </div>
    )
}