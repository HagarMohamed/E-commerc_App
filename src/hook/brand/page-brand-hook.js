import {
  useEffect
} from 'react'
import {
  getAllBrandsPage
} from '../../Redux/actions/brandAction';
import {
  useDispatch,
  useSelector
} from 'react-redux';

const PageBrandHook = () => {

  const dispatch = useDispatch();
  const brandData = useSelector(state => state.allBrands.brands)
  const loading = useSelector(state => state.allBrands.loading)



  useEffect(() => {
    dispatch(getAllBrandsPage(1, 8))
  }, [])

  const handlePageClick = (page) => {

    dispatch(getAllBrandsPage(page, 8))

  }

  
  return [brandData, loading, handlePageClick]

}

export default PageBrandHook