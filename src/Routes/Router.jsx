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
import ForgotPass from '../Pages/ForgotPass';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '/',
        Component: Home,
        loader: () => fetch('/12data.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
      },

      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },

      {
        path: '/forgotpassword',
        Component: ForgotPass,
      },
    ],
  },

  // implemented this route outside the children for not to show the navbar & footer in the toydetails' error404 element
  {
    path: 'toydetails/:id',
    element: (
      <PrivateRoute>
        <ToyDetails></ToyDetails>
      </PrivateRoute>
    ),
    loader: () => fetch('/12data.json'),
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <Error404></Error404>,
  },

  {
    path: '/*',
    Component: Error404,
  },
]);

export default router;
