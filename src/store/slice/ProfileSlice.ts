import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProfileState {
    value:boolean;
}

const initialState:ProfileState = {
    value:false
}

export const ProfileSlice = createSlice({
    name:"profileSlice",
    initialState,
    reducers: {
        profile: (state, action:PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
})

export const {profile} = ProfileSlice.actions;