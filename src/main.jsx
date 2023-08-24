import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import './index.css'
import { Login } from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Usuarios } from './pages/Usuarios.jsx';
import { Contato } from './pages/Contato.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
