import {createSlice} from '@reduxjs/toolkit';
const locationSlice = createSlice({
  name: 'location',
  initialState: {
    location: null,
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    removeLocation: state => {
      state.location = null;
    },
  },
});
export const {setLocation, removeLocation} = locationSlice.actions;
export const selectLocation = state => state.location.location;
export default locationSlice.reducer;
