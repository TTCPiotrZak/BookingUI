import _ from 'lodash';
import React, {useEffect, FC} from 'react';
import {bookingActions} from'./actions/bookingDetails'
import { connect, useDispatch } from "react-redux";

  const App = (props) => {
    const dispatch = useDispatch();


    useEffect(() => {
      const bookingReference = 'CSUSAS-A044847';
      dispatch(bookingActions.receiveBookingDetails(bookingReference))
    }, [dispatch])

    const items  = (_.chunk(props.bookingDetails,25))

    const testFunction = () => {
      console.log('test')
    }
  
    return(
      <div>
         {Object.keys(items).map((key) => {
         return (
           <div key={key}><h1>{key}</h1>{items[key].map((dataItem, index) => {
                return (<span key={index}>{dataItem.name} <br/> {dataItem.internationalCallingCode} <br/>{dataItem.alpha2}</span>)})}</div>)
       })}
       <button className = "test" onClick ={()  => testFunction()}>Random</button>
      </div>
    )
  }

  function mapStateToProps (state) {
    return {
       bookingDetails: state.bookingDetails,
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      receiveBookingDetails: (bookingReference) => dispatch(bookingActions.receiveBookingDetails(bookingReference)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App)