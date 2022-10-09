import React from 'react'
import cl from '../../styles/List.module.css'
import { Item } from '../Item/Item'

const categories = [
    {id: '1', title: 'T-shirts'},
    {id: '2', title: 'Jackets'},
    {id: '3', title: 'Coats'},
    {id: '4', title: 'Sweatshirts'},
    {id: '5', title: 'Hoodies'},
    {id: '6', title: 'Jeans'},
    {id: '7', title: 'Pants'},
    {id: '8', title: 'Shorts'},
]

export const CategoryList = () => {

    return (
        <div className={cl.list}>
            {categories.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    link={'/:id'}
                    className={cl.item}
                />
            ))}
        </div>
    )
}
