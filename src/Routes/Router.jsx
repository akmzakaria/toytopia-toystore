import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import HomeLayout from '../Layout/HomeLayout';
import Profile from '../Pages/Profile';
import ToyDetails from '../Components/ToyDetails';
import AllToys from '../Components/AllToys';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Loading from '../Pages/Loading';
import PrivateRoute from '../Provider/PrivateRoute';
import Error404 from '../Pages/Error404';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '/',
        Component: Home,
        loader: () => fetch('/6data.json'),
        hydrateFallbackElement: <Loading></Loading>,
        handle: { title: 'Home' },
      },
      {
        path: '/profile',
        Component: Profile,
        handle: { title: 'Profile' },
      },

      {
        path: '/alltoys',
        element: (
          <PrivateRoute>
            <AllToys></AllToys>
          </PrivateRoute>
        ),
        loader: () => fetch('/12data.json'),
        hydrateFallbackElement: <Loading></Loading>,
        handle: { title: 'All Toys' },
      },

      {
        path: '/login',
        Component: Login,
        handle: { title: 'Login' },
      },
      {
        path: '/register',
        Component: Register,
        handle: { title: 'Register' },
      },
    ],
  },

  {
    path: 'toydetails/:id',
    element: (
      <PrivateRoute>
        <ToyDetails></ToyDetails>
      </PrivateRoute>
    ),
    loader: () => fetch('/12data.json'),
    hydrateFallbackElement: <Loading></Loading>,
    handle: { title: 'Toy Details' },
  },

  {
    path: '/*',
    Component: Error404,
    handle: { title: 'Error' },
  },
]);

export default router;
