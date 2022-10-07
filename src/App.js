import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

function App() {
    useEffect(() => {
        tg.ready();
    })

    const onclick = () => {
        tg.close()
    }

    return (
        <div className="App">
            <button onClick={onclick}>Close</button>
        </div>
    );
}

export default App;
