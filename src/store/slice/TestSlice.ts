import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TestState {
    value:string;
}

const initialState: TestState = {
  value: ''
};

//Slice 이름, 초기값, Reducer 정의
export const TestSlice = createSlice({
  name:'testSlice',
  initialState,
  reducers:{
    test:(state, action: PayloadAction<string>) => {
      state.value = state.value + action.payload;
    }
  }
});

export const {test} = TestSlice.actions;