import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import modalSlice from "../features/modalHandles/modalSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        modal: modalSlice,
        auth: authSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
