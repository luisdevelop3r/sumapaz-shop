import { useContext, useTransition } from 'react';
import { ShoppingCartContext } from '../../Context';
import AddIcon from '../../icons/addIcon'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const ShowProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context?.closeCheckoutState()
    }
    const AddProduct = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context?.openCheckoutState()
        context?.closeProductDetail()
    }

    return(
        <div
         className="bg-white w-56 h-60 rounded-lg"
         onClick={() => ShowProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data?.data?.category?.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data?.data?.images[0]} alt={data?.data?.title} />
                <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 font-bold rounded-full m-2 p-1 z-10 transition-colors
                 hover:bg-lime-400 duration-500 cursor-pointer"
                onClick={(event) => AddProduct(event, data.data)} >
                    <AddIcon />
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data?.data?.title}</span>
                <span className="text-lg font-medium">${data?.data?.price}</span>
            </p>
        </div>
    )
}

export default Card