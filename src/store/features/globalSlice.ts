import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GlobalState = {
  categories?: any;
  products?: any;
  cartItems: any;
  cartCount: number;
  cartSubTotal: number;
};

const initialState: GlobalState = {
  cartItems: [],
  cartCount: 0,
  cartSubTotal: 0,
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    SET_CATEGORIES: (state, action: PayloadAction<any>) => {
      state.categories = action.payload;
    },
    SET_PRODUCTS: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    ADD_TO_CART: (
      state,
      action: PayloadAction<{ product: any; quantity: number }>,
    ) => {
      // Cach 1
      let index = state.cartItems.findIndex(
        (p: any) => p.id === action.payload.product.id,
      );

      if (index !== -1) {
        state.cartItems[index].attributes.quantity += action.payload.quantity;
      } else {
        action.payload.product.attributes.quantity = action.payload.quantity;
        state.cartItems = [...state.cartItems, action.payload.product];
      }
    },
    REMOVE_FROM_CART: (state, action: PayloadAction<{ product: any }>) => {
      // let items = [...state.cartItems];
      state.cartItems = state.cartItems.filter(
        (p: any) => p.id !== action.payload.product.id,
      );
      // state.cartItems = items;
    },
    SET_PRODUCT_QUANTITY: (
      state,
      action: PayloadAction<{ type: "dec" | "inc"; product: any }>,
    ) => {
      const index = state.cartItems.findIndex(
        (p: any) => p.id === action.payload.product.id,
      );
      if (action.payload.type === "inc") {
        state.cartItems[index].attributes.quantity += 1;
      } else if (action.payload.type === "dec") {
        if (state.cartItems[index].attributes.quantity === 1) {
          return;
        }
        state.cartItems[index].attributes.quantity -= 1;
      }
    },
  },
});
export const {
  SET_CATEGORIES,
  SET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRODUCT_QUANTITY,
} = globalSlice.actions;
export default globalSlice.reducer;
