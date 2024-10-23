import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/Login';
import UserPage from './pages/User';
import './App.scss';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {path: '', Component: LoginPage},
  {path: '/login', Component: LoginPage},
  {path: 'home', Component: HomePage},
  {path: '/user/create', Component: UserPage},

])

export default function App() {
  return (
   <RouterProvider router={router}/>
  );
}