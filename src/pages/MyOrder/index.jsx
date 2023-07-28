import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'
import MoveIcon from '../../icons/moveIcon'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let indexPath = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    if (indexPath === 'last') indexPath = context.order?.length - 1

    return ( 
        <Layout>
           <div className='flex items-center justify-center w-80 relative mb-2'>
            <Link to='/MyOrders' className='absolute left-0'>
            <MoveIcon/>
            </Link>
            My Order
        </div>
        <div className='flex flex-col w-80'>
        {
          context.order?.[indexPath]?.products.map(product => (
                <OrderCard key={product.id} title={product.title} imageUrl={product.images} price={`$${product.price}`} id={product.id} />
           ))
        }
        </div>
        </Layout>
    )
  }
  
  export default MyOrder
  