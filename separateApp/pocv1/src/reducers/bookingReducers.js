import {countriesConstants} from "../constants";

const INITIAL_STATE = [
  {
    bookingDetails: null,
    isLoading: false,
  },
];

export default function bookingDetailsReducer(state, action) {
  if (state === undefined) {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case countriesConstants.RECEIVE_BOOKING_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case countriesConstants.RECEIVE_BOOKING_DETAILS_SUCCESS:
      return {
        ...state,
        bookingDetails: action.payload,
        isLoading: false,
      };
    case countriesConstants.RECEIVE_BOOKING_DETAILS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state
  }
}
