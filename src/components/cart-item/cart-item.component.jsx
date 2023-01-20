import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    const truePrice = quantity * price;
    return (
      <div className={"cart-item-container"}>
        <img src={imageUrl} alt={`${name}`} />
        <div className={"item-details"}>
            <span className={'name'}>{name}</span>
            <span className={'price'}>{quantity} x ${truePrice}</span>
        </div>
      </div>
    );
}

export default CartItem;