import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { CategoryList } from './components/CategoryList/CategoryList';
import { useTelegram } from './hooks/useTelegram';
import { ProductList } from './components/ProductList/ProductList';

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    })

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<CategoryList />} />
                <Route path='/:id' element={<ProductList />} />
                <Route path='/form' element={<Form />} />
            </Routes>
        </div>
    );
}

export default App;
