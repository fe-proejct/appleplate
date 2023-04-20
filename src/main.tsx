import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Search from './pages/search';
import RestaurantDetail from './pages/restaurantDetail';
import Main from './pages/main';
import Layout from './layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: '/search/:value',
        element: <Search />
      },
      {
        path: '/restaurants/:id',
        element: <RestaurantDetail />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
