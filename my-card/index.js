import React from 'react'
import { createRoot } from 'react-dom/client';
// import Pic from './components/Pic'

function App() {
    return (
        <div>
        <h1>start</h1>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);