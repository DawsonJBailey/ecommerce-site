import './categories-preview.styles.scss';
// import SHOP_DATA from '../../shop-data.json'
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
//   const { categoriesMap } = useContext(CategoriesContext);
  //   return (
  //     <>
  //     {
  //         Object.keys(categoriesMap).map(title => {
  //             <>
  //             <h2>{title}</h2>
  //             <div className={"products-container"}>
                    // I was returning it wrong here
  //                 {categoriesMap[title].map((product) => (
  //                     <ProductCard key={product.id} product={product} />
  //                 ))}
  //             </div>
  //             </>
  //         })
  //     }

  //     </>
  //   );
  return (
    <>
      {
        isLoading ? <Spinner /> :
        (Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
    }))}
    </>
  );
};

export default CategoriesPreview;

