import { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { CategoryList } from './components/CategoryList/CategoryList';
import { useTelegram } from './hooks/useTelegram';
import { ProductList } from './components/ProductList/ProductList';
import { ProductsContext } from './context/context';

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

function App() {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        alert('3');
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
        alert('4');
    }, [])

    useEffect(() => {
        alert('5');
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData])

    useEffect(() => {
        tg.ready();
    })

    return (
        <ProductsContext.Provider value={{
            addedItems, setAddedItems, getTotalPrice
        }}>
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<CategoryList />} />
                <Route path='/:id' element={<ProductList />} />
                <Route path='/form' element={<Form />} />
            </Routes>
        </div>
        </ProductsContext.Provider>
    );
}

export default App;
