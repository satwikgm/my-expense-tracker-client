import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Landing from './pages/Landing';
import IncorrectPassword from './pages/IncorrectPassword';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path : "/login",
    element: <Login />
  },
  {
    path: "/landing",
    element: <Landing />
  },
  {
    path: "/error",
    element: <IncorrectPassword />
  },
  {
    path : "/signup",
    element: <SignupPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);