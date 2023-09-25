import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home';
import Donation from './Pages/Donation';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <div>Oops ! sorry this page is not available</div>,
    children : [
      {
        path : "/",
        loader : () => fetch('data.json') ,
        element : <Home></Home>
      },
      {
        path : "/donation/:id",
        loader : () => fetch('data.json'),
        element : <Donation></Donation>
      }

    ]
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
