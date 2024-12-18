import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import Footer from "./Components/Utilties/Footer";
import NavBarLogin from "./Components/Utilties/NavBarLogin";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Product/ShopProductsPage";
import ProductDetailsPage from "./Page/Product/ProductDetailsPage";
import AdminAddCategory from "./Components/Admin/AdminAddCategory";
import AdminAddBrand from "./Components/Admin/AdminAddBrand";
import AdminAddSubCategoryPage from "./Components/Admin/AdminAddSubCategory";


function App() {
  return (
    <div className="font">
      <NavBarLogin/>
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/allcategory" element={<AllCategoryPage/>}/>
      <Route path="/allbrand" element={<AllBrandPage/>}/>
      <Route path="/products" element={<ShopProductsPage/>} />
      <Route path="/products/:id" element={<ProductDetailsPage/>} />
      <Route path="/addCategory" element={<AdminAddCategory/>} />
      <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
      <Route path="/addBrand" element={<AdminAddBrand/>} />
        
        
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
