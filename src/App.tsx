import HomePage from './components/HomePage';
import Dashboard from './components/DashboardPage';
import { useState } from 'react';

function App() {
    const [home, setHome] = useState(true);

    return (
        <>
            {home ? (
                <HomePage setHome={setHome} />
            ) : (
                <Dashboard setHome={setHome} />
            )}
        </>
    );
}

export default App;
