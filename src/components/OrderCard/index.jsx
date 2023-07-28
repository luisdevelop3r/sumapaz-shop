import DeleteIcon from "../../icons/deleteIcon"

const OrderCard = (props) => {
    const { title, imageUrl, price, id, deleteProduct } = props

    let renderDeleteIcon
    if (deleteProduct) {
        renderDeleteIcon = <DeleteIcon id={id} deleteProduct={deleteProduct} />
    }
    return(
        <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover"
                     src={imageUrl}
                     alt={title} /> 
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-medium">{price}</p>
              {renderDeleteIcon}
            </div>
        </div>
    )
}

export default OrderCard