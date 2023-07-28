import { useContext } from 'react'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'

function MyOrders() {
    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
        <div className='flex items-center justify-center w-80 relative'>
           <h1>My Orders</h1> 
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/MyOrders/${index}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
            </Link>
          ))
        }
        </Layout>
    )
  }
  
  export default MyOrders
  