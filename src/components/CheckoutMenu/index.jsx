import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import CloseIcon from "../../icons/closeIcon"
import OrderCard from "../OrderCard"
import { totalPrice } from '../../Utils/totalPrice'
import "./CheckoutMenu.css"

const CheckoutMenu = () => {
    const context = useContext(ShoppingCartContext)

    const deleteProduct = (id) => {
        const productIndex = context.cartProducts.findIndex(product => product.id === id);
      
        if (productIndex !== -1) {
          // Eliminar el producto del array utilizando splice y almacenar el elemento eliminado en deletedProduct
          context.cartProducts.splice(productIndex, 1);
        
          // Actualizar el state del carrito con los productos restantes
          context.setCartProducts(context.cartProducts);
      
          // Actualizar el state del contador con la longitud del nuevo array de productos
          context.setCount(context.cartProducts.length);
        }
      }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '10.12.2023',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        }
        if (Array.isArray(context.order)) {
            context.setOrder([...context.order, orderToAdd])
         }
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutState()
        context.setSearchByTitle(null)
    } 
    return(
        <aside className={`${context.checkoutState ? 'flex' : 'hidden'}
        scrollable-cards product-detail flex-col fixed w-[360px] h-[calc(99vh-68px)] top-[68px] right-0 p-6 border z-20 border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">
                    My orders
                </h2>
                <button onClick={() => context?.closeCheckoutState()}><CloseIcon /></button>
            </div>
              <div>
                {
                    context.cartProducts.map(product => (
                        <OrderCard key={product.id} title={product.title} imageUrl={product.images} price={`$${product.price}`} id={product.id} deleteProduct={deleteProduct}/>
                    ))
                }
                <div className="end-0">
                <div className="flex justify-between items-center">
                    <p className="font-light">Price:</p>
                    <span className="font-medium text-1xl">${totalPrice(context.cartProducts)}</span>
                </div>
                <Link to='/MyOrders/last'>
                 <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
                </div>
              </div>

        </aside>
    )
}

export default CheckoutMenu