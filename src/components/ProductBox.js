import React from 'react'
import FilterBox from './FilterBox'
import ProductList from './ProductList'


const ProductBox = () => (
  <div className="ProductBox">
    <header className="ProductHeader">
      <h1 className="ProductHeader-title">Products</h1>
      <FilterBox/>
    </header>
    <ProductList/>
  </div>
)

export default ProductBox
