import { ResponceUser } from '@/api/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../store/store';

export type UserState = {
  data: ResponceUser | null;
};

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ResponceUser>) => {
      state.data = action.payload;
    },
  },
  extraReducers:{
    [HYDRATE]:(state,action) => {
      return{
        ...state,
        ...action.payload.user
      }
    }
  }
});

export const {setUserData} = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUserData = (state:RootState)=> state.user.data
