import { createSlice } from '@reduxjs/toolkit';

const loginReducer = createSlice({
  name: 'login',
  initialState: {
    loginData: {},
  },
  reducers: {
    updateLoginData: (state, action) => {
        state.loginData = action.payload;
      },
    clearAllData: (state) => {
      state.loginData = {};
    }
  },
});


export const { updateLoginData,clearAllData } = loginReducer.actions;

export default loginReducer.reducer;