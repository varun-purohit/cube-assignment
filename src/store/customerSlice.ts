import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../utils/types";

interface CustomerState {
  customers: Customer[];
  selectedCustomer: Customer | null;
}

const initialState: CustomerState = {
  customers: [],
  selectedCustomer: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<Customer[]>) => {
      state.customers = action.payload;
      state.selectedCustomer = action.payload[0] || null;
    },
    setSelectedCustomer: (state, action: PayloadAction<Customer>) => {
      state.selectedCustomer = action.payload;
    },
  },
});

export const { setCustomers, setSelectedCustomer } = customerSlice.actions;
export default customerSlice.reducer;
