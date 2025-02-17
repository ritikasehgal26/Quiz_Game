import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import allUsers from "./slices";

export const store = configureStore({
  reducer: allUsers,
});
setupListeners(store.dispatch);
