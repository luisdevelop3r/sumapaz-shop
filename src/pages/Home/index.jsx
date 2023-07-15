import { useState, useEffect, useContext } from 'react'
import { ShoppingCartContext } from '../../Context';
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'

function Home() {
  const [items, setItems] = useState(null)
  const context = useContext(ShoppingCartContext)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
    
  }, [])
    return (
        <Layout>
         Home
         <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
         {
          items?.map((item) => (
          <Card key={item.id} data={item}/>
          ))
         }
         </div>
                 
         <ProductDetail></ProductDetail>

         </Layout>
    )
  }
  
  export default Home
  