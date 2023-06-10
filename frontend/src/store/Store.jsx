import { configureStore } from "@reduxjs/toolkit";
import CartReducer, { getTotals } from "./slice/CartSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

store.dispatch(getTotals());

export default store;
