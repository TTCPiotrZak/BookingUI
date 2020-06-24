import { countriesConstants } from "../constants";
import { sreceiveCountries } from "../services/receiveCountries";



export const passengerActions = {
  receiveCountries,
};

const receiveCountriesRequest = () => {
  return {
    type: countriesConstants.RECEIVE_COUNTRIES_DETAILS_REQUEST,
  };
};

export function receiveCountriesSuccess(countries) {
  return {
    type: countriesConstants.RECEIVE_COUNTRIES_DETAILS_SUCCESS,
    payload: countries,
  };
}

const receiveCountriesFailure = (error) => {
  return {
    type: countriesConstants.RECEIVE_COUNTRIES_DETAILS_FAILURE,
    payload: error,
  };
};

export function receiveCountries() {
  return (dispatch) => {
    dispatch(receiveCountriesRequest());
    try {
      sreceiveCountries().then((res) => {
        dispatch(receiveCountriesSuccess(res));
      });
    } catch (error) {
      dispatch(receiveCountriesFailure(error));
    }
  };
}
