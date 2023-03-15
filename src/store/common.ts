import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "../features/commonSlice";

const store = configureStore({
    reducer: {
        common: commonSlice,
    }
})

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;