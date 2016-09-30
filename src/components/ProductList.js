import React from 'react'
import Product from './Product'

const ProductList = ({type}) => (
  <ul className="ProductList">
    <Product type={type}/>
    <Product type={type}/>
    <Product type={type}/>
    <Product type={type}/>
    <Product type={type}/>
  </ul>
)

export default ProductList
