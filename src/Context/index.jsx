import { createContext, useState, useEffect } from 'react'
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // shopping Cart  // counter
  const [count, setCount] = useState(0)
  const [cartProducts, setCartProducts] = useState([])

  // shopping Cart  // order 
  const [order, setOrder] = useState([])

  // productDetail  // open/Close
  const [productState, setProductState] = useState(false)
  const openProductDetail = () => setProductState(true)
  const closeProductDetail = () => setProductState(false)

  // productDetail  // show product
  const [productToShow, setProductToShow] = useState({})

  // Checkout menu  
  const [checkoutState, setCheckoutState] = useState(false)
  const openCheckoutState = () => setCheckoutState(true)
  const closeCheckoutState = () => setCheckoutState(false)


  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  // Get filtered Products 

  const [filteredItems, setFilteredItems] = useState(null)
  // Get Products by title 
  const [searchByTitle, setSearchByTitle] = useState(null)

  const filterByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  // Get Products by Category 
  const [searchByCategory, setSearchByCategory] = useState(null)
  const filterByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }


  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filterByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filterByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filterByTitle(items, searchByTitle)?.filter(item => item?.category?.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    else {
      setFilteredItems(items)
    }
  }, [items, searchByTitle, searchByCategory])


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      productState,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      checkoutState,
      openCheckoutState,
      closeCheckoutState,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}