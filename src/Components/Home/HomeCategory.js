import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utilties/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import cloth from '../../Images/clothe.png'

const HomeCategory = () => {
  return (
    <Container>
        <SubTitle title="Categorey" btnTitle="More" pathText="/allcategory"/>
        <Row className='d-flex my-2'>
        <CategoryCard title="House Machines" img={cloth} background="#FADBA4"/>
        <CategoryCard title="House Machines" img={cloth} background="#FADBA4"/>
        <CategoryCard title="House Machines" img={cloth} background="#FADBA4"/>
        <CategoryCard title="House Machines" img={cloth} background="#FADBA4"/>
        <CategoryCard title="House Machines" img={cloth} background="#FADBA4"/>
        <CategoryCard title="House Machines" img={cloth} background="#FADBA4"/>
        </Row>
      
    </Container>
  )
}

export default HomeCategory
