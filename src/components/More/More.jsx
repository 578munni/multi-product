import React from 'react'
import { useLoaderData } from 'react-router-dom'

const More = () => {

    const more = useLoaderData();
    const {title, image,price} = more;

  return (
    <div className='more'>
       <h1> moer info...</h1>
       <h2> {title} </h2>
       <p> <img className='img' src= {image} alt="" /> </p>
       <h3> {price} </h3>

    </div>
  )
}

export default More