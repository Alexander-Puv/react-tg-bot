import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTelegram } from '../../hooks/useTelegram';
import { Button } from '../Button/Button';
import cl from './Header.module.css';

export const Header = () => {
    const {user, onClose} = useTelegram();
    const navigate = useNavigate();
    
    return (
        <div className={cl.header}>
            {window.location.pathname !== '/' ?
                <Button onClick={() => navigate('/')}>Back</Button>
            :
                <></>
            }
            <Button onClick={onClose}>Close</Button>
        </div>
    )
}