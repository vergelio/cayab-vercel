import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router/Router'


import reportWebVitals from './reportWebVitals';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



