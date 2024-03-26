import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from '../assets/utils/newRequest'
import {useParams} from "react-router-dom"
import { Container } from '../components';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
"pk_test_51Oy7uNSG2IEr19huEIKRSt6qu4QQd77rPbcSRkA9nkF6v765tvoXLBsWiznqN2OOkMxLxdBA1DgFwr3tupYHE1y700zMrMliJp"
);
function Pay() {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <Container>
    <div>
    {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
    </Container>
  )
}

export default Pay
