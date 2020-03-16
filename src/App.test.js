import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import store from './store/store';
import * as actions from './actions/bookingDetails'
import bookingDetailsConstants from './constants/'
import { render, fireEvent } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library
import App from './App'
import bookingDetailsReducer from './reducers/bookingReducers'
import {sreceiveBookingDetails} from './services/bookingDetails'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('REDUCERS', () => {

  it('should return the initial state', () => {
    expect(bookingDetailsReducer(undefined, {})).toEqual([
      {
        bookingDetails: null,
        isLoading: false,
      }
    ])
  })

  it('should handle reducer - Booking Details Request', () => {
    expect(
      bookingDetailsReducer([], {
        type: bookingDetailsConstants.RECEIVE_BOOKING_DETAILS_REQUEST,
      })
    ).toEqual(
      {
        isLoading: true,
      }
    )
  })

  it('should handle reducer - Booking Details Success', () => {
    expect(
      bookingDetailsReducer([], {
        type: bookingDetailsConstants.RECEIVE_BOOKING_DETAILS_SUCCESS,
        bookingDetails: 'test',
      })
    ).toEqual(
      {
        isLoading: false,
        bookingDetails: undefined,
      }
    )
  })

  it('should handle reducer - Booking Details Failure', () => {
    expect(
      bookingDetailsReducer([], {
        type: bookingDetailsConstants.RECEIVE_BOOKING_DETAILS_FAILURE,
        bookingDetails: 'test',
      })
    ).toEqual(
      {
        isLoading: false,
        bookingDetails: undefined,
      }
    )
  })
  
})

describe('ACTIONS', () => {


  it('should create an action to add a booking details', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: bookingDetailsConstants.RECEIVE_BOOKING_DETAILS_SUCCESS,
      payload
    }
    expect(actions.receiveBookingDetailsSuccess(payload)).toEqual(expectedAction)
  })
})


describe('COMPONENTS', () => {

  it('Random test', () => {
    // eslint-disable-next-line react/jsx-no-undef
    const { container } = render(<Provider store={store}><App/></Provider>)
    console.log(container)
  })

})











describe('API CALLS', () => {

  //  async function asyncFetch(url){
  //   return await fetch(url);
  

  // it('test endpoint - /countries', async () => {

  //   fetchMock.get('http://localhost:9000/api/countries', 200)
  //   const response = await asyncFetch(`http://localhost:9000/api/countries`);
  //   const result = await response.json();
    
  //   expect(result).toEqual('test')

  // })

})


// describe('async actions', () => {

//   afterEach(() => {
//     fetchMock.restore()
//   })
//   it('test', () => {

//     fetchMock.getOnce('/todos', {
//       body: { bookingDetails: ['test'] },
//       headers: { 'content-type': 'application/json' }
//     })

//     const expectedActions = [
//       { type: bookingDetailsConstants.RECEIVE_BOOKING_DETAILS_REQUEST },
//       { type: bookingDetailsConstants.RECEIVE_BOOKING_DETAILS_SUCCESS, payload: { bookingDetails: ['test'] } }
//     ]

//     const store = mockStore({ bookingDetails: [] })

//     return store.dispatch(sreceiveBookingDetails()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })