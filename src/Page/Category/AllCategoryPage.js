import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Utilties/Pagination'
import AllCategoryHook from '../../hook/category/all-category-page-hook'
import { getCategoryPage } from '../../Redux/actions/categoryAction'
import { useDispatch } from 'react-redux'

const AllCategoryPage = () => {

  const [categoryData, loading, getPage] = AllCategoryHook();
  // const dispatch = useDispatch();

  let pageCount = 0;
  if (categoryData.paginationResult){
    pageCount = categoryData.paginationResult.numberOfPage
  }
   
  
  


  return (
    <div style={{minHeight: '650px'}}>
        <CategoryContainer categories ={categoryData.data} loading={loading}/>

        {pageCount > 1 ? <Pagination pageCount = {pageCount} onPress = {getPage}/> : null}
        
      
    </div>
  )
}

export default AllCategoryPage
