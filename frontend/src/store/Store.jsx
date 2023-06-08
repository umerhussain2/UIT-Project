import { configureStore } from "@reduxjs/toolkit";
import CartReducer, { getTotals } from "./slice/CartSlice";
import OrdersReducer from "./slice/OrdersSlice";
import ShippedReducer from "./slice/ShippedSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    orders: OrdersReducer,
    shipped: ShippedReducer,
  },
});

store.dispatch(getTotals());

export default store;
