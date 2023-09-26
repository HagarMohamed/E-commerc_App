import React from 'react'
import NavBarLogin from '../../Components/Utilties/NavBarLogin'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import DiscountSection from '../../Components/Home/DiscountSection'

const HomePage = () => {
  return (
    <div className='font' style={{minHeight: "700px"}}>
      <NavBarLogin/>
      <Slider/>
      <HomeCategory/>
      <CardProductsContainer title="Best Seller" btnTitle="More"/>
      <DiscountSection/>
      <CardProductsContainer title="Latest fashion" btnTitle="More"/>
    </div>
  )
}

export default HomePage
