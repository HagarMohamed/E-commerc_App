import React from 'react'
import ProductCard from './ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utilties/SubTitle'

const CardProductsContainer = ({title ,btnTitle ,pathText}) => {
  return (
    <Container>
        <SubTitle title={title} btnTitle={btnTitle} pathText={pathText}/>
        <Row className='d-flex my-2'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </Row>
      
    </Container>
  )
}

export default CardProductsContainer
