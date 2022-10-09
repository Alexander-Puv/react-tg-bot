import React from 'react'
import { Button } from '../Button/Button';
import cl from './Category.module.css';

export const Category = ({product, className, onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={cl.product + ` ${className}`}>
            <div className={cl.img} />
            <div className={cl.title}>{product.title}</div>
            <div className={cl.description}>{product.description}</div>
            <div className={cl.price}>
                <span>Price:b <b>{product.price}</b></span>
            </div>
            <Button className={cl.addBtn} onClick={onAddHandler}>Add to cart</Button>
        </div>
    )
}
