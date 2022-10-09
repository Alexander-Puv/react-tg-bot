import React from 'react'
import { Category } from '../Category/Category'
import cl from './CategoryList.module.css'

const products = [
    {id: '1', category: 'T-shirt', /* price: '19.99', description: 'White' */},
    {id: '2', category: 'Jacket', /* price: '79.99', description: '' */},
    {id: '3', category: 'Coat', /* price: '129.99', description: 'It will not torn in 3 days!!!' */},
    {id: '4', category: 'Sweatshirt', /* price: '39.99', description: '' */},
    {id: '5', category: 'Hoodie', /* price: '49.99', description: '110% natural, 120% vegan' */},
    {id: '6', category: 'Jeans', /* price: '49.99', description: '' */},
    {id: '7', category: 'Pants', /* price: '49.99', description: 'Full-7-zip hoodie' */},
    {id: '8', category: 'Shorts', /* price: '24.99', description: '' */},
]

export const CategoryList = () => {
    return (
        <div className={cl.list}>
            {products.map(item => (
                <Category 
                    product={item}
                    onAdd={onAdd}
                    className={cl.item}
                />
            ))}
        </div>
    )
}
