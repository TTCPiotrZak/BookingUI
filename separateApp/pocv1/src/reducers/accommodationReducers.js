import {accommodationConstants} from "../constants";

const INITIAL_STATE = 
  {
    preAccommodation: null,
  };

export default function preAccommodationReducer(state, action, payload) {
  if (state === undefined) {
    return INITIAL_STATE;
  }

  console.info(payload)

  switch (action.type) {
    case accommodationConstants.SET_PREACCOMMODATION:
      return {...state, ...{ preAccommodation: action.payload }}

    case accommodationConstants.SET_POSTACCOMMODATION:
      console.log(state)
      return {...state, ...{ postAccommodation: action.payload }}

      default:
        return state
  }
}
