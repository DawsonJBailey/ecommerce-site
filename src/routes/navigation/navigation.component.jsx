import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CartContext } from "../../contexts/cart.context";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles';

const Navigation = () => {
  // const {currentUser, setCurrentUser} = useContext(UserContext);
  // For redux you get the value you need from state like this
  // const currentUser = useSelector((state) => state.user.currentUser);
  // But we moved it to a function in another file to export here
  const currentUser = useSelector(selectCurrentUser);
  
  // const {isCartOpen, setIsCartOpen} = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  // Using styled components here
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <CrwnLogo className={"logo"} />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/shop"}>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to={"/auth"}>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
