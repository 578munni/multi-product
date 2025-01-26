import React from 'react'
import { Link } from 'react-router-dom';

const Products = ({product}) => {
    const {
        category,
        title,
        image,
        description,price} = product;
  return (
    <div className='pro'>
        <h1 > {category} </h1>
        <h2> {title} </h2>
        {/* <img src= {image} alt="" /> */}
        {/* {image} */}
        <p> {description} </p>
        <p> {price} </p>

        <Link to={`/product/${product.id}`}> <button className='btn'> More information....  </button> </Link>
    </div>
  )
}

export default Products