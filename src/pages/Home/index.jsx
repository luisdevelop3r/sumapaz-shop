import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context';
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'


function Home() {
  const context = useContext(ShoppingCartContext)
  const renderView = () => {

      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item}/>
          ))
        )
      } else {
        return (
          <div>We don't found anything 😔</div>
        )
      }
  }
  
    return (
      <Layout>
       <div className='flex items-center justify-center w-80 relative mb-4'>
         <h1 className='text-2xl font-medium text-center'>Welcome to our store</h1>
      </div>
      <input className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
       onChange={(event) => context.setSearchByTitle(event.target.value)}
       name='search'
       id='search'
       autoComplete='off'
       autoFocus
       data-testid='search' type="search" placeholder='Search a product' />
       <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
       {renderView()}
       </div>    
       <ProductDetail />
       </Layout>
    )
  }
  
  export default Home
  