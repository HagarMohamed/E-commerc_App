import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getAllCategory, getCategoryPage} from '../../Redux/actions/categoryAction';


const AllCategoryHook = () => {
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.allcategory.category)
    const loading = useSelector(state => state.allcategory.loading)
  
  useEffect(()=>{
   dispatch( getCategoryPage(1,4))
  },[])

  const getPage = (page) =>{

    dispatch(getCategoryPage(page, 4))
    
  }
  
  return [categoryData, loading, getPage]
  
}

export default AllCategoryHook
