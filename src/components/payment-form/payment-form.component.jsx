import './payment-form.styles.scss'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { PaymentFormContainer, FormContainer } from './payment-form.styles'

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: 10000})
        }).then(res => res.json())

        console.log(response);
        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Dawson Bailey'
                }
            }
        })
        if(paymentResult.error) {
            alert(paymentResult.error);
        }
        else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('payment successful')
            }
        }
    }

    return(
        <div className={'payment-form-container'}>
            <form className={'form-container'} onSubmit={paymentHandler}>
            <h2>Credit Card Payment: </h2>
            <CardElement />
            <Button buttonType={'inverted'}>Pay now</Button>
            </form>
        </div>
    )
}

export default PaymentForm;