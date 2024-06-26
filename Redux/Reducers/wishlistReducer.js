// src/redux/reducers/wishlistReducer.js
const initialState = [];

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return [...state, action.payload];
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(movie => movie.id !== action.payload);
    default:
      return state;
  }
};

export default wishlistReducer;