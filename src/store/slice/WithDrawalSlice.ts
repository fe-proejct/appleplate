import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WithdrawalState {
    value: boolean
}

const initialState:WithdrawalState = {
    value: false
};

export const WithDrawalSlice = createSlice({
    name: "withdrawalSlice",
    initialState,
    reducers: {
        withdrawal: (state, action:PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
})

export const { withdrawal } = WithDrawalSlice.actions;