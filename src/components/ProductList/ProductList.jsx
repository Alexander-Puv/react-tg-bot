import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../context/context';
import { useTelegram } from '../../hooks/useTelegram';
import { products } from '../../products/products';
import cl from '../../styles/List.module.css';
import { Item } from '../Item/Item';

export const ProductList = () => {
    const params = useParams();
    const {tg} = useTelegram();
    const {addedItems, setAddedItems, getTotalPrice} = useContext(ProductsContext);

    const onAdd = (product) => {
        /* products[params.id-1]; */
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