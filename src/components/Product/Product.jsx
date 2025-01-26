import React from 'react'
import { useLoaderData } from 'react-router-dom'
import User from '../User/User';
import Products from '../Products/Products';

const Product = () => {

    const product = useLoaderData();

    console.log(product);
  return (
    <div className='ma-pro'>
        
       {
        product.map( product => <Products 
          key={product.id}
            product = {product}
        ></Products>)
       }
    </div>
  )
}

export default Product