import { createSlice } from '@reduxjs/toolkit';

interface DefaultSignUpState {
  defaultRegister:boolean
}

const initialState: DefaultSignUpState = {
defaultRegister: false,
};

const defaultSignUpStateSlice = createSlice({
  name: 'defaultSignUpState',
  initialState: initialState,
  reducers: {
    setDefaultRegister: (state,action) => {
      state.defaultRegister = action.payload;
    },
    
  },
});

export const { setDefaultRegister } = defaultSignUpStateSlice.actions;
export default defaultSignUpStateSlice.reducer;
