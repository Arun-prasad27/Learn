import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');

    if(rootElement) {
        createRoot(rootElement).render(<App />);
    } else {
        console.error("The required mounting point #root was not found in index.html.");
    }
});
