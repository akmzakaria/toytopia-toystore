import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import HomeLayout from '../Layout/HomeLayout';
import Profile from '../Pages/Profile';
import ToyDetails from '../Components/ToyDetails';
import AllToys from '../Components/AllToys';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '/',
        Component: Home,
        loader: () => fetch('/6data.json'),
      },
      {
        path: '/profile',
        Component: Profile,
      },

      {
        path: '/alltoys',
        Component: AllToys,
        loader: () => fetch('/12data.json'),
      },
    ],
  },

  {
    path: 'toydetails/:id',
    element: <ToyDetails></ToyDetails>,
  },
]);

export default router;
