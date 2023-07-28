import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { NavLink } from 'react-router-dom'
import OrdersIcon from '../../icons/OrdersIcon';

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
             <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
                <ul className='flex items-center gap-3'>
                    <li className='font-semibold text-lg'>
                    <NavLink
                    to="/"
                    onClick={() => context.setSearchByCategory('')}>        
                    Shopi
                    </NavLink></li>
                    <li>
                    <NavLink
                    to="/"
                    onClick={() => context.setSearchByCategory('')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""}>              
                    All
                    </NavLink></li>
                    <li>
                    <NavLink
                    to="/clothes"
                    onClick={() => context.setSearchByCategory('clothes')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""}>              
                    Clothes
                    </NavLink></li>
                    <li>
                    <NavLink
                    to="/electronics"
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""}>              
                    Electronics
                    </NavLink></li>
                    <li>
                    <NavLink
                    to="/furnitures"
                    onClick={() => context.setSearchByCategory('Furniture')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""}>              
                    Furnitures
                    </NavLink></li>
                    <li>
                    <NavLink
                    to="/toys"
                    onClick={() => context.setSearchByCategory('toys')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""}>              
                    Toys
                    </NavLink></li>
                    <li>
                    <NavLink
                    to="/others"
                    onClick={() => context.setSearchByCategory('others')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""}>              
                    Others
                    </NavLink></li>
               </ul>
                <ul className='flex items-center gap-3'>
                    <li className='text-black/60'>
                    <NavLink
                    to="/">              
                    lucho@iderf.com
                    </NavLink></li>
                    <li>
                    <NavLink
                    to="/MyOrders"
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""}>              
                    My Orders
                    </NavLink></li>
                    <li>
                    <NavLink
                    to="/MyAccount"
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""}>              
                    My Account
                    </NavLink></li>
                    <li>
                    <NavLink
                    to="/SingIn"
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""}>              
                    SingIn
                    </NavLink></li>
                    <li className='flex' onClick={() => context?.openCheckoutState()}>
                                                          
                    <OrdersIcon />
                    <div>{context.cartProducts.length}</div>
                    </li>
                </ul>
              </nav>
    )
}
export default Navbar
  