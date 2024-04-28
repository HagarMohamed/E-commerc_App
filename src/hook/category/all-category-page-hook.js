import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllCategory from '../../Redux/actions/categoryAction';


const AllCategoryHook = () => {
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.allcategory.category)
    const loading = useSelector(state => state.allcategory.loading)
  
  useEffect(()=>{
   dispatch( getAllCategory())
  },[])
  
  return [categoryData, loading]
  
}

export default AllCategoryHook
