import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoutes from './routes/AllRoutes';
import './assets/styles/App.css'; // ✅ Your main CSS file
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AllRoutes />);
