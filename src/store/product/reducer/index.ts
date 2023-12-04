// customReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../types";
interface InitialStateProps {
  products?: Array<ProductProps>;
  cart: number[];
}
const initialState: InitialStateProps = {
  // Your custom state here
  products: undefined,
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.id];
    },
    deleteFromCart: (state, actions) => {
      const cart = state.cart;
      const index = cart.indexOf(actions.payload.id);
      cart.splice(index, 1);
      state.cart = cart;
    },
  },
});

export const { setProducts, addToCart, deleteFromCart } = productSlice.actions;
export default productSlice.reducer;
