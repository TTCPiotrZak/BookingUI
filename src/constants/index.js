const createConstants= (...constants) => {
    return constants.reduce((accumulator, constant) => {
      accumulator[constant] = constant
      return accumulator
    }, {})
  }
  
 const bookingDetailsConstants = createConstants(
    'RECEIVE_BOOKING_DETAILS_REQUEST',
    'RECEIVE_BOOKING_DETAILS_SUCCESS',
    'RECEIVE_BOOKING_DETAILS_FAILURE',
  )

  export default bookingDetailsConstants