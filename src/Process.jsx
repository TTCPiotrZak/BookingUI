
import React, {useState, useEffect} from 'react';

import Overview from './Phases/Overview'
import Flights from './Phases/Flights'
import Passengers from './Phases/Passengers'
import Payments from './Phases/Payments'

import Navbar from './components/Navbar'
import './components/Navbar.scss'

export const phases =
    [
      {name: 'Overview', component: <Overview/>},
      {name: 'Flights', component: <Flights/>},
      {name: 'Passengers', component: <Passengers/>},
      {name: 'Payments', component: <Payments/>}
    ]

let Process = (props) => {

// Rendering steps title
    const renderSteps = () => {
    return phases.map((s, i)=> (
        <li className={getClassName("phase", i)}  onClick={handleOnClick}  key={i} value={i}>
        <span>{phases[i].name}</span>
        </li>
    ));}
// Adding property class
    const getClassName = (className, i) => {return className + "-" + navState.styles[i];}
// Rendering when - onClick on Navs Items
    const handleOnClick = (evt) => {
        if (evt.currentTarget.value === (phases.length - 1) && compState === (phases.length - 1)) {setNavState(phases.length)}
        else {setNavState(evt.currentTarget.value)}
      }
// Navigate
    const next = () => {if(compState === phases.length -1){console.info('the out of scope')} else{setNavState(compState + 1)}}
    const previous = () => {if(compState <= 0){console.info('the out of scope')}else{setNavState(compState - 1)}}
// Setting next step in Nav
      const setNavState = (next) => {
          console.info(next)
          console.info(navState)
          setnavState(getNavStates(next, phases.length))
            if (next < phases.length) {setcompState(next)}
          checkNavState(next);
        }
// Checking currently step
      const checkNavState = (currentStep) => {
        console.info(currentStep)
      }
     
// Applying styling + 
    const getNavStates = (indx, length) => {
        let styles = [];
        for (let i=0; i<length; i++) {
            if(i < indx) {styles.push('done')} else if(i === indx) {styles.push('doing')} else {styles.push('todo')}
        } 
        return {current: indx, styles: styles}
        }

    const [compState, setcompState] = useState(0);
    const [navState, setnavState] = useState(getNavStates(0, phases.length));

    const Component = phases[compState].component.type    

    return (
        <div>
            {/* <Navbar compState = {compState} navState = {navState} setnavState = {setnavState} phases = {phases}/> */}
            <div className="Navbar" >  
              {renderSteps()}
            </div>
          <Component onSubmit={next}/>
          <button className ="test" onClick = {next}>Next</button>
          <button className ="test" onClick = {previous}>Previous</button>
        </div>
      );
}

export default Process



// class Process extends React.Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         showNextBtn: 'showNextBtn' + ' hero_button',
//         compState: 0,
//         navState: this.getNavStates(0, this.props.phases.length)
//       };

//       this.handleOnClick = this.handleOnClick.bind(this);
//       // this.handleKeyDown = this.handleKeyDown.bind(this);
//       this.next = this.next.bind(this);
//     }

//     getNavStates(indx, length) {
//       let styles = [];
//       for (let i=0; i<length; i++) {
//         if(i < indx) {styles.push('done')} else if(i === indx) {styles.push('doing')} else {styles.push('todo')}
//       }
//       return {current: indx, styles: styles}
//     }

//     checkNavState(currentStep){
//       if(currentStep > 0 && currentStep < this.props.phases.length - 1){this.setState({})}
//       else if(currentStep === 0) {this.setState({showNextBtn: true})}
//       else if (this.state.compState = 3) {this.setState({showNextBtn : 'showNextBtn ' + ' hide'})}
//     }
//     setNavState(next) {
//         this.setState({navState: this.getNavStates(next, this.props.phases.length)})
//         if (next < this.props.phases.length) {this.setState({compState: next})}
//         this.checkNavState(next);
//       }

//   //   handleKeyDown(evt) {
//   //     if (evt.which === 13) {
//   //         console.log('clicked')
//   //     }
//   //   }

//     handleOnClick(evt) {
//       if (evt.currentTarget.value === (this.props.phases.length - 1) &&
//         this.state.compState === (this.props.phases.length - 1)) {
//         this.setNavState(this.props.phases.length)
//       }
//       else {
//         this.setNavState(evt.currentTarget.value)
//       }
//     }

//     next() {this.setNavState(this.state.compState + 1)}

//     getClassName(className, i){
//       return className + "-" + this.state.navState.styles[i];
//     }

//     renderSteps() {
//         return this.props.phases.map((s, i)=> (
//           <li className={this.getClassName("progtrckr", i)}  onClick={this.handleOnClick}  key={i} value={i}>
//             <em>{i+1}</em>
//             <span>{this.props.phases[i].name}</span>
//           </li>
//         ));
//       }

//     render() {
//       const Component = this.props.phases[this.state.compState].component.type;
//       return (
//         <div className="container" 
//       //   onKeyDown={this.handleKeyDown}
//         >
//             <Navbar compState = {this.compState} navState = {this.navState} setnavState = {this.setnavState} phases = {phases}/>
//           <ol className="progtrckr">
//             {this.renderSteps()}
//           </ol>
//           <Component onSubmit={this.next}/>
//           <button className ="test" onClick = {this.next}>Next</button>
//         </div>
//       );
//     }
//   }

  


