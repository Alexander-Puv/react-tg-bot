import React from 'react';
import cl from './Category.module.css';

export const Category = ({category, className, /* onAdd */}) => {
    /* const onAddHandler = () => {
        onAdd(category);
    } */

    return (
        <div className={cl.category + ` ${className}`}>
            <div className={cl.img} />
            <div className={cl.title}>{category.title}</div>
            {/* <div className={cl.description}>{category.description}</div>
            <div className={cl.price}>
                <span>Price: <b>{category.price}</b></span>
            </div>
            <Button className={cl.addBtn} onClick={onAddHandler}>Add to cart</Button> */}
        </div>
    )
}
