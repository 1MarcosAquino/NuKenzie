import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/DashboardPage';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* <Route path="/*" element={<h1>Not Found<h1/>} /> */}
        </Routes>
    );
}
