import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div>
      <h2>
      <Link to={'/home'}>Home</Link>&nbsp;&nbsp;
        <Link to={'/product'}>Product</Link>&nbsp;&nbsp;
        <Link to={'/blog'}>Blog</Link>&nbsp;&nbsp;
        <Link to={'/contuct'}>Contuct</Link>&nbsp;&nbsp;
       
      </h2>
    </div>
  )
}

export default Navber