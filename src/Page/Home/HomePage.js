import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeature from '../../Components/Brand/BrandFeature'


const HomePage = () => {
  return (
    <div className='font' style={{minHeight: "700px"}}>
      <Slider/>
      <HomeCategory/>
      <CardProductsContainer title="Best Seller" btnTitle="More" pathText="/products"/>
      <DiscountSection/>
      <CardProductsContainer title="Latest Fashion" btnTitle="More" pathText="/products"/>
      <BrandFeature title="Latest Brand" btnTitle="More"/>
      
    </div>
  )
}

export default HomePage
