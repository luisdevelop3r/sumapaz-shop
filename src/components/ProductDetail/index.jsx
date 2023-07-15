import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import CloseIcon from "../../icons/closeIcon"

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return(
        <aside className={`${context.productState ? 'flex' : 'hidden'} product-detail flex-col fixed w-[360px] h-[calc(98vh-68px)] top-[67px] right-0 p-6 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">
                    Detail
                </h2>
                <button onClick={() => context.toogleProductDetail()}><CloseIcon /></button>
            </div>
        </aside>
    )
}

export default ProductDetail