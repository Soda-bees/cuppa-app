import {createSlice} from '@reduxjs/toolkit';
const outletsSlice = createSlice({
  name: 'outlets',
  initialState: {
    outlets: null,
  },
  reducers: {
    setOutlets: (state, action) => {
      state.outlets = action.payload;
    },

    removeOutlets: state => {
      state.outlets = null;
    },

    addNewReviewRedux: (state, action) => {
      const outlet = state.outlets.find(
        outlet => outlet._id === action.payload.cafeData,
      );
      if (outlet) {
        outlet.reviews.push(action.payload);
      }
      return state;
    },

    updateOutletReviewRedux: (state, action) => {
      const {updatedReview} = action.payload;
      const cafeData = updatedReview.cafeData;

      const outlet = state.outlets.find(outlet => outlet._id === cafeData);

      if (outlet) {
        const reviewIndex = outlet.reviews.findIndex(
          review => review._id === updatedReview._id,
        );

        if (reviewIndex !== -1) {
          outlet.reviews[reviewIndex] = updatedReview;
        }
      }
    },

    deleteOutletReviewRedux: (state, action) => {
      const {deletedReview} = action.payload;
      const cafeData = deletedReview.cafeData;
      const outlet = state.outlets.find(outlet => outlet._id === cafeData);

      if (outlet) {
        const reviewIndex = outlet.reviews.findIndex(
          review => review._id === deletedReview._id,
        );

        if (reviewIndex !== -1) {
          outlet.reviews.splice(reviewIndex, 1);
        }
      }

      return state;
    },

    updateEventRedux: (state, action) => {
      const {selectedEvent} = action.payload;
      const cafeData = selectedEvent.cafeData;
      const outlet = state.outlets.find(outlet => outlet._id === cafeData);
      const events = outlet.events;

      if (events) {
        const updatedEvents = events.map(event =>
          event._id === selectedEvent._id ? selectedEvent : event,
        );

        const newState = {
          ...state,
          outlets: state.outlets.map(outlet =>
            outlet._id === cafeData
              ? {...outlet, events: updatedEvents}
              : outlet,
          ),
        };

        return newState;
      }

      return state;
    },
  },
});
export const {
  setOutlets,
  removeOutlets,
  addNewReviewRedux,
  updateOutletReviewRedux,
  deleteOutletReviewRedux,
  updateEventRedux,
} = outletsSlice.actions;
export const selectOutlets = state => state.outlet.outlets;
export default outletsSlice.reducer;
