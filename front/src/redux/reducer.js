import { createSlice } from '@reduxjs/toolkit'; 


const initialState = {
  user: null,
  userAppointments: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUserAppointments(state, action) {
      state.userAppointments = action.payload;
    },
  },
});

export const { setUser, setUserAppointments } = userSlice.actions;
export default userSlice.reducer;

// userSlice.js