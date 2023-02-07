import { loadStripe } from "@stripe/stripe-js";

// export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const stripePromise = loadStripe(
  "pk_test_51MYvoABRPgm0kPZ1PdtgrE6jcGyuLcReO6uLwbAh3JlLCdwNdBj3BSX6c5teSaVKtnpy4wIcWRGbpSMudI2HWtRa006O5RFaCM"
);