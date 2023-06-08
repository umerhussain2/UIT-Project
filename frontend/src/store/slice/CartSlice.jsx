import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.info(
          `increased ${state.cartItems[itemIndex].title} cart quantity`,
          {
            theme: "colored",
            position: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };

        state.cartItems.push(tempProduct);

        toast.success(`${action.payload.title} added to cart`, {
          theme: "colored",
          position: "bottom-left",
        });
      }
    },

    removeToCart(state, action) {
      const nextCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = nextCartItem;

      toast.error(`${action.payload.title} removed from cart`, {
        theme: "colored",
        position: "bottom-left",
      });
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`Decreased ${action.payload.title} quantity from cart`, {
          theme: "colored",
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItem;

        toast.error(`${action.payload.title} removed from cart`, {
          theme: "colored",
          position: "bottom-left",
        });
      }
    },

    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Cart is clear`, {
        theme: "colored",
        position: "bottom-left",
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmmount = total;
    },
  },
});

export const { addToCart, removeToCart, decreaseCart, clearCart, getTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
