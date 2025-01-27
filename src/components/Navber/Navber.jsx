import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='nav'>
      <h2>
      <Link className='link' to={'/home'}>Home</Link>&nbsp;&nbsp;
        <Link className='link' to={'/product'}>Product</Link>&nbsp;&nbsp;
        <Link className='link' to={'/blog'}>Blog</Link>&nbsp;&nbsp;
        <Link className='link' to={'/contuct'}>Contuct</Link>&nbsp;&nbsp;
       
      </h2>
    </div>
  )
}

export default Navber