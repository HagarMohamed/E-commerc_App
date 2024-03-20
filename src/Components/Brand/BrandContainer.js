import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Brand1 from '../../Images/brand1.png'
import Brand2 from '../../Images/brand2.png'
import Brand3 from '../../Images/brand3.png'
import BrandCard from './BrandCard'

const BrandContainer = () => {
  return (
    <Container>
        <div className='admin-content-text mt-2'>All Brand</div>
        <Row className='d-flex my-2'>
        <BrandCard  img={Brand1} />
        <BrandCard  img={Brand2} />
        <BrandCard  img={Brand3} />
        <BrandCard  img={Brand1} />
        <BrandCard  img={Brand2} />
        <BrandCard  img={Brand3} />
        </Row>
      
    </Container>
  )
}

export default BrandContainer
