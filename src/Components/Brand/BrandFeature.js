import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utilties/SubTitle'
import BrandCard from './BrandCard'
import Brand1 from '../../Images/brand1.png'
import Brand2 from '../../Images/brand2.png'
import Brand3 from '../../Images/brand3.png'

const BrandFeature = ({title, btnTitle}) => {
  return (
    <Container>
        <SubTitle title={title} btnTitle={btnTitle} pathText="/allbrand"/>
        <Row className='d-flex my-1 justify-content-between'>
        <BrandCard img={Brand1}/>
        <BrandCard img={Brand2}/>
        <BrandCard img={Brand3}/>
        <BrandCard img={Brand1}/>
        <BrandCard img={Brand2}/>
        <BrandCard img={Brand3}/>


        </Row>
      
    </Container>
  )
}


export default BrandFeature
