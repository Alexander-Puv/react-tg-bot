import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import { Button } from '../Button/Button';
import cl from './Header.module.css';

export const Header = () => {
    const {tg, user, onClose} = useTelegram();
    
    return (
        <div className={cl.header}>
            <Button onClick={onClose}>Close</Button>
            <span className={cl.username}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}