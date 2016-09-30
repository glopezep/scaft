import React from 'react'

const Product = ({type}) => {
  if (type!=='inline') {
    return (
      <li className="Product">
        <i className="Product-icon icon-drink"></i>
        <div className="Product-description">
          <p className="Product-title">Orange Juice</p>
          <p className="Product-price">RD$120</p>
        </div>
        <div className="Product-stock is-highCant">
          <span className="Product-label">Stock:</span>
          <span className="Product-cant">30</span>
        </div>
      </li>
    )
  }

  return (
    <li className="Product--inline">
      <p className="Product-title">Orange Juice</p>
      <p className="Product-price">RD$120</p>
      <a href="#" className="Product-iconRemove">X</a>
    </li>
  )
}

export default Product
