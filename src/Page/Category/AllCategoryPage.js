import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Utilties/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import getAllCategory from '../../Redux/actions/categoryAction';

const AllCategoryPage = () => {

  const dispatch = useDispatch();
  const categoryData = useSelector(state => state.getAllCategory.cateory)
  const loading = useSelector(state => state.getAllCategory.loading)
  



useEffect(()=>{
 dispatch( getAllCategory())
},[])

  return (
    <div style={{minHeight: '650px'}}>
        <CategoryContainer/>
        <Pagination/>
      
    </div>
  )
}

export default AllCategoryPage
