import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import userDataSlice from './userDetails';
import outletsSlice from './outletsSlice';
import locationSlice from './locationSlice';
import roleSlice from './role';

const rootReducer = combineReducers({
  auth: authSlice,
  user: userDataSlice,
  outlet: outletsSlice,
  location: locationSlice,
  role: roleSlice,
});
export default rootReducer;
