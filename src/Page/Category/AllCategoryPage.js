import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Utilties/Pagination'
import AllCategoryHook from '../../hook/category/all-category-page-hook'

const AllCategoryPage = () => {

  const [categoryData, loading] = AllCategoryHook();


  return (
    <div style={{minHeight: '650px'}}>
        <CategoryContainer/>
        <Pagination/>
      
    </div>
  )
}

export default AllCategoryPage
