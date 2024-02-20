import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './component/pages/errorPage/ErrorPage.jsx';
import HomePage from './component/pages/home/HomePage.jsx';
import SignUp from './component/pages/sign/SignUp.jsx';
import SignIn from './component/pages/sign/SignIn.jsx';
import AuthProvider from './component/provider/AuthProvider.jsx';
import ProductDetails from './component/pages/details/ProductDetails.jsx'
import MyCart from './component/pages/cart/MyCart.jsx'
import UpdatePage from './component/pages/update/UpdatePage.jsx'
import AddProduct from './component/pages/addProduct/AddProduct.jsx'
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/details/:id",
        element: <ProductDetails />
      },
      {
        path: "/myCart",
        element: <MyCart />
      },
      {
        path: "/update/:id",
        element: <UpdatePage />
      },
      {
        path: "/addProduct",
        element: <AddProduct />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
