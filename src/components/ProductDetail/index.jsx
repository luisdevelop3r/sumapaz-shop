import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import CloseIcon from "../../icons/closeIcon"

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
   

    return(
        <aside className={`${context.productState ? 'flex' : 'hidden'}
         product-detail flex-col fixed w-[360px] h-[calc(98vh-68px)] top-[68px] right-0 p-6 border z-20 border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">
                    Detail
                </h2>
                <button onClick={() => context?.closeProductDetail()}><CloseIcon /></button>
            </div>
                <figure>
                    <img 
                    className="w-full h-full rounded-lg" 
                    src={context?.productToShow?.images ? context?.productToShow?.images[0]: ''}
                    alt={context?.productToShow?.title} />
                </figure>
                <div className="w-full h-full flex flex-col">
                <span className="font-medium text-md">{context?.productToShow?.title}</span>
                <span className="font-medium text-2xl mb-2">${context?.productToShow?.price}</span>
                <span className="font-light text-sm">{context?.productToShow?.description}</span>
                </div>
        </aside>
    )
}

export default ProductDetail