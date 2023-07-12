import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SingIn from '../SingIn';
import NotFound from '../NotFound';
import Navbar from '../../components/Navbar'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/MyAccount', element: <MyAccount /> },
    { path: '/MyOrder', element: <MyOrder /> },
    { path: '/MyOrders', element: <MyOrders /> },
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
