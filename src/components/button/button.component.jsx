import './button.styles.scss';
import {
  LoadingSpinner,
} from "./button.styles";

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    invertedPayment: 'invertedPayment'
}

const Button = ({children, buttonType, isLoading, ...otherProps}) => {
    return (
        <button {...otherProps} disabled={isLoading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}` }>{isLoading ? <LoadingSpinner /> : children}</button>
    )
}

export default Button;