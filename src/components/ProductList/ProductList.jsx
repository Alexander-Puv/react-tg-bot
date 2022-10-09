import React, { useCallback, useEffect, useState } from 'react'
import { Item } from '../Item/Item'
import cl from '../../styles/List.module.css'
import { useTelegram } from '../../hooks/useTelegram';
import { useParams } from 'react-router-dom';
import { products } from '../../products/products';

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

export const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const params = useParams();
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId
        }
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Buy ${newItems.length} items for ${getTotalPrice(newItems)}$`
            })
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