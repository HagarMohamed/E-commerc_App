import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Utilties/Pagination'
import PageBrandHook from '../../hook/brand/page-brand-hook';

const AllBrandPage = () => {

  const [brandData, loading, handlePageClick] = PageBrandHook();

  let pageCount = 0;
  if(brandData.paginationResult){
    pageCount = brandData.paginationResult.numberOfPages
  }

  

  return (
    <div style={{minHeight: '650px'}}>
        <BrandContainer brands = {brandData.data} loading={loading} />
        <Pagination pageCount={pageCount} onPress={handlePageClick}/>
      
    </div>
  )
}

export default AllBrandPage
