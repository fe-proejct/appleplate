import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TestSlice } from "./slice/TestSlice";

export type RootState = ReturnType<typeof store.getState>;

//App.ts에 적용하기 위해 Reducer 호출
export const store = configureStore({
  reducer: {
    testReducer: TestSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
