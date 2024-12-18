import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'
import Pagination from '../Utilties/Pagination'

const BrandContainer = ({ brands, loading }) => {

  return (
    <Container>
      <div className='admin-content-text mt-2'>All Brand</div>

      <Row className='d-flex my-2'>

        {loading ? (<Spinner></Spinner>) :
          (
            brands.length > 0 ? brands.map((item) => {
              return (
                <BrandCard img={item.image} />
              )
            }) : <h3>not found</h3>
          )
        }
      </Row>
    </Container>
  )
}

export default BrandContainer
