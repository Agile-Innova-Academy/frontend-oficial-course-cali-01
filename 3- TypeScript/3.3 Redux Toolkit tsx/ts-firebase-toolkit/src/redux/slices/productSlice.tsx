import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  uid: string | null;
  name: string | null;
}

const initialState: ProductState = {
  uid: null,
  name: null,
};

const productosSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    ProductAdd: (state, action: PayloadAction<ProductState>) => {
      state.uid = action.payload.uid;
      state.name = action.payload.name;
    }

  },
});

export const { ProductAdd } = productosSlice.actions;

export default productosSlice.reducer;
