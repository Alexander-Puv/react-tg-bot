import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import { Button } from '../Button/Button';
import cl from './Header.module.css';

export const Header = () => {
    const {user, onClose} = useTelegram();
    alert(user);
    
    return (
        <div className={cl.header}>
            <Button onClick={onClose}>Close</Button>
            <span className={cl.username}>
                {user?.username}
            </span>
        </div>
    )
}