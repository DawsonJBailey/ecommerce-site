import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({title, products}) => {
    return (
      <div className={"category-preview-container"}>
        <h2>
          <Link className={"nav-link"} to={`/shop/${title.toLowerCase()}`}>
            <span className={"title"}>{title.toUpperCase()}</span>
          </Link>
        </h2>
        <div className={"preview"}>
          {
            // Only showing the first 4 products
            products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          }
        </div>
      </div>
    );
}

export default CategoryPreview;