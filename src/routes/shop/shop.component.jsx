import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import { setCategories } from '../../store/categories/category.action';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import "./shop.styles.scss";
import Category from '../category/category.component';
import CategoriesPreview from "../categories-preview/categories-preview.component";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
