import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51HfLtxITp57fjOsbIB8ynSVIW0C0qN9JXwnR1SfDgfMWlO6J3e6WLN20brQev7YFxe9NOdsoiTf5duqSGvwAHdAj00PJaAvmhr";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };

  return <StripeCheckout label="Pay Now" name="CRWN Clothing Ltd." billingAddress shippingAddress image="https://svgshare.com/i/CUz.svg" description={`Your total is $${price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />;
};

export default StripeCheckoutButton;
