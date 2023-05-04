/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import Blog from './components/Blog.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import Chefs from './components/Chefs.jsx';
import Chef from './components/Chef.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/chef",
        element: <Chefs></Chefs>
      },
      {
        path: '/chef/:id',
        element: <ProtectedRoute><Chef></Chef></ProtectedRoute>,
        loader: ({params}) => fetch(`https://chefs-recipe-server-sayed8901.vercel.app/chef/${params.id}`)
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
