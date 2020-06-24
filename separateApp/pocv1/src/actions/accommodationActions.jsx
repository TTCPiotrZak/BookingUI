import { accommodationConstants } from '../constants'

export const accommodationActions = {
    addPreAccommodation,
    addPostAccommodation,
};

export function addPreAccommodation(value) {
    console.log(value)
    return (dispatch) => {
        dispatch({type: accommodationConstants.SET_PREACCOMMODATION, payload: value})
      };
}

export function addPostAccommodation(value) {
    console.log(value)
    return (dispatch) => {
        dispatch({type: accommodationConstants.SET_POSTACCOMMODATION, payload: value})
      };
}

