import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../context/context';
import { Button } from '../Button/Button';
import cl from './Item.module.css';

export const Item = ({item, className, link, onAdd}) => {
    const [isInCart, setIsInCart] = useState(false);
    const navigate = useNavigate()
    const {addedItems} = useContext(ProductsContext);

    useEffect(() => {
        if (addedItems.find(i => i.id === item.id)) {
            setIsInCart(true)
        }
    }, [])
    
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
            <Button onClick={onAddHandler}>{!isInCart ? 'Add to cart' : 'Remove from cart'}</Button>
        </div>}</>
    )
}
