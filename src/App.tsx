import HomePage from './components/HomePage';
import Dashboard from './components/DashboardPage';
import { useState } from 'react';

function App() {
    const [home, setHome] = useState(true);

    return (
        <>
            {home && <HomePage action={() => setHome(false)} />}
            {!home && <Dashboard action={() => setHome(true)} />}
        </>
    );
}

export default App;
