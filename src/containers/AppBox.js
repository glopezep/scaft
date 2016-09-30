import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductBox from '../components/ProductBox'
import OrderBox from '../components/OrderBox'

const AppBox = () => (
  <div className="AppBox-container">
    <Header/>
    <section className="AppBox">
      <ProductBox/>
      <OrderBox/>
    </section>
    <Footer/>
  </div>
)

export default AppBox
