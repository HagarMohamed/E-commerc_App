
import { Container, Row } from 'react-bootstrap'
import cloth from '../../Images/clothe.png'
import CategoryCard from './CategoryCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllCategory from '../../Redux/actions/categoryAction';

const CategoryContainer = () => {

  const dispatch = useDispatch();
  const categoryData = useSelector(state => state.allcategory.category)
  const loading = useSelector(state => state.allcategory.loading)
  const error = useSelector(state => state.allcategory.error)


  const colors = ["#FADBA4", "#FADBA4", "#FADBA4", "#FADBA4", "#FADBA4", "#FADBA4"]

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  return (
    <Container>
      <div className='admin-content-text mt-2'>All Category</div>
      <Row className='d-flex my-2 '>

        {
          loading === false ?
            // error ? (<h2>error</h2>) : (
              categoryData.data ? (
                categoryData.data.slice(0, 5).map((item, index) => {

                  return (<CategoryCard title={item.name} img={item.imge} background={colors[index]} />)
                })


              ) : <h2>not found</h2>
            // )
            : (<h2>loaaading</h2>
            )
        }
      </Row>

    </Container>
  )
}

export default CategoryContainer
