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
import DonatedCardsList from './DonatedCardsList/DonatedCardsList';
import ErrorPage from './ErrorPage/ErrorPage';
import Statistics from './Pages/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('data.json'),
        element: <Home></Home>
      },
      {
        path: "/donation/:id",
        loader: () => fetch('data.json'),
        element: <Donation></Donation>
      },
      {
        path: "/donatedCards",
        element: <DonatedCardsList></DonatedCardsList>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }

    ]
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
