import OrdersIcon from "../../icons/OrdersIcon"
import MoveIcon from "../../icons/moveIcon"

const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props

    return(
        <div className="grid grid-cols-[30px_1fr_100px] mt-6 border border-black w-80 p-[9px] rounded-md
                        shadow-[8px_8px_16px_#afafaf,-8px_-8px_16px_#ffffff]">

                <figure className="flex justify-center items-center h-full scale-125">
                 <OrdersIcon />
                </figure>
                <div className="flex flex-col justify-center pl-3">
                 <span className="font-light text-md">{totalProducts} Articles</span>
                 <span className="font-light text-md">10.12.2023</span>
               </div>
                <div className="flex justify-end items-center pr-2 text-lg font-medium">
                 <span>${totalPrice}</span> 
                 <span className="rotate-180"><MoveIcon /></span>                                  
                </div>         
        </div>
    )
}

export default OrdersCard