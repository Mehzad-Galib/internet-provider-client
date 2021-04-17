import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React,{useState} from 'react';


const SimpleCardPay = (props) => {
    const detail = props.cardDetail;
    const stripe = useStripe();
  const elements = useElements();
  let cardInfo = {};
  
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const handleChange = async (event) => {
    
    event.preventDefault();
    if (!stripe || !elements) {  
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentInfo(error.message);
      console.log('[error]', error);
      
    } 
    if(paymentMethod){
        cardInfo.cardId = paymentMethod.id;
        cardInfo.last4 = paymentMethod.card.last4;
        cardInfo.postalCode = paymentMethod.billing_details.address.postal_code;
      setPaymentInfo(`Your card information is valid, You may proceed to order.`)
    //   console.log('[PaymentMethod]', paymentMethod.id);
      detail(cardInfo)
      setPaymentStatus(true);
    }
  };

  return (
    <>
    <form>
        <label className='mb-2'>Card Details(Please input your card details and click on 'check card' before place order)
        <CardElement />

        </label>
      
      <button onClick={handleChange} disabled={!stripe}>
        Check Card
      </button>
    
    </form>

    {paymentStatus ?
        <h4 style={{color: 'green'}}>{paymentInfo}</h4>
    : <h4 style={{color: 'red'}}>{paymentInfo}</h4>
    } 
    </>

    
  );
};

export default SimpleCardPay; 