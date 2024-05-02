import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utilties/SubTitle'
import BrandCard from './BrandCard'
import Brand1 from '../../Images/brand1.png'
import AllBrandHook from '../../hook/brand/home-brand-hook'

const BrandFeature = ({title, btnTitle}) => {

  const [brandData, loading] = AllBrandHook();

  return (
    <Container>
        <SubTitle title={title} btnTitle={btnTitle} pathText="/allbrand"/>
        <Row className='d-flex my-1 justify-content-between'>

        {brandData.data? brandData.data.slice(0, 5).map((item, index) => {
          return (
            <BrandCard key={index} img={item.image}/>
            )
        }) 
        : <h3>no found</h3>
        }
        


        </Row>
      
    </Container>
  )
}


export default BrandFeature
