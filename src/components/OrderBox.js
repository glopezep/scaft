import React from 'react'
import ProductList from './ProductList'

var orderEnv = 'empleoye'

const OrderBox = () => (
  <div className="OrderBox">
    <header className="OrderHeader">
      <h1 className="OrderHeader-title">Order-1289</h1>
      <div className="OrderHeader-row">
        <h3 className="OrderHeader-subTitle">Product</h3>
        <h3 className="OrderHeader-subTitle">Price</h3>
      </div>
    </header>
    <ProductList type='inline'/>
    <footer className="OrderFooter">
      <button className={orderEnv==='user' ? 'OrderFooter-button' : 'OrderFooter-button--complete'}>{orderEnv==='user' ? 'CHECKOUT' : 'COMPLETE'}</button>
      <div className="OrderFooter-total">
        <p className="OrderFooter-label">TOTAL</p>
        <p className="OrderFooter-cant">RD$1200</p>
      </div>
    </footer>
  </div>
)

export default OrderBox
