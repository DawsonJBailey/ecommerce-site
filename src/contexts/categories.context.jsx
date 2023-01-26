import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js'

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };
  
  // If you want to do something async in useEffect you have to
  // make it an async function and then call it at the bottom
  useEffect(() => {
    // Since getCategoriesAndDocuments is async in firebase utils
    // we have to wrap it in an async function for useEffect
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
    
  }, [])
  

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};