import React, { useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import { Category } from '../Category/Category'
import cl from './CategoryList.module.css'

const categories = [
    {id: '1', title: 'T-shirt', /* price: '19.99', description: 'White' */},
    {id: '2', title: 'Jacket', /* price: '79.99', description: '' */},
    {id: '3', title: 'Coat', /* price: '129.99', description: 'It will not torn in 3 days!!!' */},
    {id: '4', title: 'Sweatshirt', /* price: '39.99', description: '' */},
    {id: '5', title: 'Hoodie', /* price: '49.99', description: '110% natural, 120% vegan' */},
    {id: '6', title: 'Jeans', /* price: '49.99', description: '' */},
    {id: '7', title: 'Pants', /* price: '49.99', description: 'Full-7-zip hoodie' */},
    {id: '8', title: 'Shorts', /* price: '24.99', description: '' */},
]

export const CategoryList = (/* category */) => {
    /* const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const onAdd = () => {
        const alreadyAdded = addedItems.find(item => item.id === category.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== category.id);
        } else {
            newItems = [...addedItems, category];
        }

        setAddedItems(newItems);

        if (newItems.length) {

        }
    } */

    return (
        <div className={cl.list}>
            {categories.map(item => (
                <Category
                    key={item.id}
                    category={item}
                    link={'/:id'}
                    /* onAdd={onAdd} */
                    className={cl.item}
                />
            ))}
        </div>
    )
}
