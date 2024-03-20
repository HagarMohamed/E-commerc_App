import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import SideFilter from '../../Components/Utilties/SideFilter'
import SearchCountResult from '../../Components/Utilties/SearchCountResult'
import Pagination from '../../Components/Utilties/Pagination'


const ShopProductsPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title="400 search results" />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="2" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="10">
                         <CardProductsContainer title="" btntitle=""/>
                    </Col>
                </Row>
                    <Pagination />
            </Container>
        </div>
    )
}

export default ShopProductsPage