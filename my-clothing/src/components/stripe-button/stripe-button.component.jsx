import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    const priceForStipe = price * 100;
    const publishableKey = 'pk_test_51OaIKHSGX6PQsvpLpvtWSd5jlWI71pxg4sppZokIIa0C4CjTqi7n0UQDAvSPPasXT03niwqj8kBORMHlYvFjJBaa00ORakkYlC'
    const onToken = token => {
        console.log(token)
        alert('payment successful')
    }
    return(
        <StripeCheckout
           label="pay now"
           name="Crown store"
           billingAddress
           shippingAddress
           image="https://svgshare.com/i/Cuz.svg"
           description={`your total is $${price}`}
           amount={priceForStipe}
           panelLabel="Pay Now"
           token={onToken}
           stripeKey={publishableKey}
        />
    )
} 
export default StripeCheckoutButton