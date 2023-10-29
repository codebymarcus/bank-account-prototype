import React from 'react'
import ReactDOM from 'react-dom/client'
import 'styles/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from '@/Root';
import ErrorPage from '@/error-page.jsx';

import Account from 'pages/Account';
import Goals from 'pages/Goals';
import Dashboard from 'pages/Dashboard';

import { DefaultLoader } from 'components/Loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: DefaultLoader,
    children: [
      {
        path: '/',
        element: <Account />,
        loader: DefaultLoader,
      },
      {
        path: 'goals',
        element: <Goals />,
        loader: DefaultLoader,
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
