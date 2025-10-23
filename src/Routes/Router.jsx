import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import HomeLayout from '../Layout/HomeLayout';
import Profile from '../Pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/profile',
        Component: Profile,
      },
    ],
  },
]);

export default router;
