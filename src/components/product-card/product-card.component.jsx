import './product-card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const ProductCard = ({product}) => {
    // const {addItemToCart} = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const {name, price, imageUrl} = product;

    const addProductToCart = () => {
      dispatch(addItemToCart(cartItems, product));
    };

    return (
      <div className={"product-card-container"}>
        <img src={imageUrl} alt={`${name}`} />
        <div className={"footer"}>
          <span className={"name"}>{name}</span>
          <span className={"price"}>{price}</span>
        </div>
        <Button onClick={addProductToCart} buttonType={'inverted'}>Add to cart</Button>
      </div>
    );
}

export default ProductCard;