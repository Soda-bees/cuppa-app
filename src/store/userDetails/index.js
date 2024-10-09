import {createSlice} from '@reduxjs/toolkit';
const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    removeUserData: state => {
      state.userData = null;
    },

    emptyUserCart: state => {
      if (state.userData) {
        state.userData.cart = [];
      }
    },

    addCardDetailsRedux: (state, action) => {
      if (state.userData) {
        state.userData.cardDetails = state.userData.cardDetails.map(card => ({
          ...card,
          selected: false,
        }));
        state.userData.cardDetails.push(action.payload);
      }
    },

    deleteCardRedux: (state, action) => {
      if (state.userData) {
        state.userData.cardDetails = state.userData.cardDetails.filter(
          card => card._id !== action.payload,
        );
      }
    },

    updateCardRedux: (state, action) => {
      if (state.userData) {
        state.userData.cardDetails = state.userData.cardDetails.map(card =>
          card._id === action.payload._id ? {...card, ...action.payload} : card,
        );
      }
    },

    selectCardRedux: (state, action) => {
      if (state.userData) {
        state.userData.cardDetails = state.userData.cardDetails.map(card =>
          card._id === action.payload._id
            ? {...card, ...action.payload, selected: true}
            : {...card, selected: false},
        );
      }
    },

    addNewReviewUserRedux: (state, action) => {
      const newReview = action.payload;
      return {
        ...state,
        userData: {
          ...state.userData,
          reviews: [...state.userData.reviews, newReview],
        },
      };
    },

    updateUserReviewRedux: (state, action) => {
      const {updatedReview} = action.payload;
      const reviewIndex = state.userData.reviews.findIndex(
        review => review._id === updatedReview._id,
      );

      if (reviewIndex !== -1) {
        state.userData.reviews[reviewIndex] = updatedReview;
      }
    },

    deleteUserReviewRedux: (state, action) => {
      const {deletedReview} = action.payload;
      const updatedUser = {...state.userData};

      if (updatedUser) {
        const reviewIndex = updatedUser.reviews.findIndex(
          review => review._id === deletedReview._id,
        );

        if (reviewIndex !== -1) {
          updatedUser.reviews.splice(reviewIndex, 1);
        }
      }

      return state;
    },
    updateWalletRedux: (state , action) => {
      const balance = action.payload
      if (state.userData) {
        state.userData.wallet = balance;
      }
      
    }
  },
});
export const {
  setUserData,
  removeUserData,
  emptyUserCart,
  addCardDetailsRedux,
  deleteCardRedux,
  updateCardRedux,
  selectCardRedux,
  addNewReviewUserRedux,
  updateUserReviewRedux,
  deleteUserReviewRedux,
  updateWalletRedux
} = userDataSlice.actions;
export const selectUserData = state => state.user.userData;
export default userDataSlice.reducer;
