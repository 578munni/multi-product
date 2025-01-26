import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Product from './components/Product/Product.jsx';
import Blog from './components/Blog/Blog.jsx';
import Contuct from './components/Contuct/Contuct.jsx';
import Error from './components/Error/Error.jsx';
import More from './components/More/More.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/Product',
        loader: () => fetch('https://fakestoreapi.com/products'),
        element: <Product></Product>
      },
      {
        path: '/product/:productID',
        loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.productID}`),
        element: <More></More>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/contuct',
        element: <Contuct></Contuct>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </StrictMode>,
)
