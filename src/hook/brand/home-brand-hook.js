import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllBrands from '../../Redux/actions/brandAction';


const AllBrandHook = () => {
    const dispatch = useDispatch();
    const brandData = useSelector(state => state.allBrands.brands)
    const loading = useSelector(state => state.allBrands.loading)
  
  useEffect(()=>{
   dispatch( getAllBrands())
  },[])
  
  return [brandData, loading]
  
}

export default AllBrandHook
