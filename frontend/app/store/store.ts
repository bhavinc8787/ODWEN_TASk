import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./slices/inventorySlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
