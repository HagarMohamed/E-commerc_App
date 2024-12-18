import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'

const ProductDetailsPage = () => {
  return (
    <div>
        <CategoryHeader/>
        <Container>
                <ProductDetalis />
                <RateContainer />
                <CardProductsContainer title="منتجات قد تعجبك" />
            </Container>
      
    </div>
  )
}

export default ProductDetailsPage
