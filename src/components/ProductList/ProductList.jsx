import React, { useState } from 'react'
import { Item } from '../Item/Item'
import cl from '../../styles/List.module.css'
import { useTelegram } from '../../hooks/useTelegram';
import { useParams } from 'react-router-dom';
import { products } from '../../products/products';

export const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const params = useParams();
    const {tg} = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length) {

        }
    }

    return (
        <div className={cl.list}>
            {products[params.id-1].map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onAdd={onAdd}
                    className={cl.item}
                />
            ))}
        </div>
    )
}