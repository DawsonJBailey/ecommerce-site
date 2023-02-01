import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import "./shop.styles.scss";
import Category from '../category/category.component';
import CategoriesPreview from "../categories-preview/categories-preview.component";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      // Since getCategoriesAndDocuments is async in firebase utils
      // we have to wrap it in an async function for useEffect
      const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments();
        console.log(categoriesArray);
        dispatch(setCategories(categoriesArray));
      };
      getCategoriesMap();
    }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
