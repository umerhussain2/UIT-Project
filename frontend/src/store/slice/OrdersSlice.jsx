import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder(state, action) {
      state.push(action.payload);
      toast.success("Order Submit", {
        theme: "colored",
        position: "bottom-left",
      });
    },
    deleteOrder(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addOrder, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
