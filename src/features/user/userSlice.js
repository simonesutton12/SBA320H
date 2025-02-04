import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    goals: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setGoals: (state, action) => {
      state.goals = action.payload;
    },
  },
});

export const { setUser, setGoals } = userSlice.actions;
export default userSlice.reducer;


