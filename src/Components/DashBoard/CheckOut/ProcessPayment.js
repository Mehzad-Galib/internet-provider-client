import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardPay from "./SimpleCardPay";

const stripePromise = loadStripe(
  "pk_test_51Ie1nCJB0QTUlblT6uKFn34gl5lYnflJofYxKZhkfWxAXxA7ep3pSOfX5ytnZOLGjy8m2RbfgjKmdJICskq1arWt00WZlnwr1e"
);

const ProcessPayment = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <SimpleCardPay/>
      </Elements>
    </>
  );
};

export default ProcessPayment;
