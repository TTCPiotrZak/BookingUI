
import bookingDetails from'../constants'
import {sreceiveBookingDetails} from '../services/bookingDetails'

const types = bookingDetails

export const bookingActions = {
  receiveBookingDetails
}

/* receive booking details */

const receiveBookingDetailsRequest = () => {
  return {
    type:types.RECEIVE_BOOKING_DETAILS_REQUEST,
  }
}

export function receiveBookingDetailsSuccess(bookingDetails) {
  return {
    type: types.RECEIVE_BOOKING_DETAILS_SUCCESS,
    payload: bookingDetails,
  }
}

const receiveBookingDetailsFailure = (error) => {
  return {
    type: types.RECEIVE_BOOKING_DETAILS_FAILURE,
    payload: error,
  }
}

 export function receiveBookingDetails (bookingReference) {
  return dispatch => {
    dispatch(receiveBookingDetailsRequest())
    try {
      sreceiveBookingDetails(bookingReference).then(res =>{
        dispatch(receiveBookingDetailsSuccess(res))
      })
    }
    catch (error) {
      dispatch(receiveBookingDetailsFailure(error))
    }
  }
}