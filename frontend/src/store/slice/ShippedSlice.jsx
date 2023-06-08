import { createSlice } from "@reduxjs/toolkit";

const shippedSlice = createSlice({
  name: "shipped",
  initialState: [],
  reducers: {
    addToShipped(state, action) {
      state.push(action.payload);
    },
    orderDone(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToShipped , orderDone } = shippedSlice.actions;
export default shippedSlice.reducer;
