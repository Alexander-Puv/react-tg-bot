import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import cl from './Item.module.css';

export const Item = ({item, className, link, onAdd}) => {
    const [isInCart, setIsInCart] = useState(false);
    const navigate = useNavigate()
    
    const onAddHandler = () => {
        onAdd(item);
        if (!isInCart) {
            setIsInCart(true);
        } else {
            setIsInCart(false);
        }
    }

    return (
        <>{link ?
        <div to={link} className={cl.item + ` ${className}`} onClick={() => navigate(`/${item.id}`)}>
            <div className={cl.img} />
            <div className={cl.title}>{item.title}</div>
        </div>
        :
        <div to={link} className={cl.item + ` ${className}`}>
            <div className={cl.img} />
            <div className={cl.title}>{item.title}</div>
            <div className={cl.description}>{item.description}</div>
            <div className={cl.price}>
                <span>Price: <b>{item.price}$</b></span>
            </div>
            <Button className={cl.addBtn} onClick={onAddHandler}>{!isInCart ? 'Add to cart' : 'Remove from cart'}</Button>
        </div>}</>
    )
}
