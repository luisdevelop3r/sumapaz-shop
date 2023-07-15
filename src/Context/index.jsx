import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [productState, setProductState] = useState(false)
    const toogleProductDetail = () => setProductState(!productState)

    
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            productState,
            toogleProductDetail,
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}