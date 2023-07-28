import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SingIn from '../SingIn';
import NotFound from '../NotFound';
import Navbar from '../../components/Navbar'
import CheckoutMenu from '../../components/CheckoutMenu';

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/MyAccount', element: <MyAccount /> },
    { path: '/MyOrder', element: <MyOrder /> },
    { path: '/MyOrders', element: <MyOrders /> },
    { path: '/MyOrders/last', element: <MyOrder /> },
    { path: '/MyOrders/:id', element: <MyOrder /> },
    { path: '/SingIn', element: <SingIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

/* <>
      <div className='bg-teal-300'>
       <Home />
       <MyAccount />
       <MyOrder />
       <MyOrders />
       <NotFound />
       <SingIn />
      </div>
    </> */
export default App
