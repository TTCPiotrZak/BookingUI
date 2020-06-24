import {combineReducers} from 'redux'
import accommodation from './accommodationReducers'
import booking from './bookingReducers'


export default combineReducers({
    accommodation,
    booking,
})