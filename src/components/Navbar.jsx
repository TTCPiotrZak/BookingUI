
import React from 'react';

// import './Navbar.less'

let Navbar = (props) => {

    const renderSteps = () => {
        return props.phases.map((s, i)=> (
            <li className={getClassName("progtrckr", i)}  onClick={handleOnClick}  key={i} value={i}>
            <em>{i+1}</em>
            <span>{props.phases[i].name}</span>
            </li>
        ));}

    const getNavStates = (indx, length) => {
        let styles = [];
        for (let i=0; i<length; i++) {
            if(i < indx) {styles.push('done')} else if(i === indx) {styles.push('doing')} else {styles.push('todo')}
        }
        return {current: indx, styles: styles}
        }

    const setNavState = (next) => {
            this.setState({navState: this.getNavStates(next, this.props.phases.length)})
            if (next < this.props.phases.length) {this.setState({compState: next})}
            this.checkNavState(next);
          }

     const getClassName = (className, i) => {return className + "-"}

     const handleOnClick = (evt) => {
        if (evt.currentTarget.value === (props.phases.length - 1) && props.compState === (props.phases.length - 1)) {props.setnavState(props.phases.length)}
        else {props.setnavState(evt.currentTarget.value)}
      }

    console.info(props)
    return(
    <div className="Navbar" >         
        <ol className="progtrckr">{renderSteps()}</ol>
        {props.phases[0].name}
    </div>
    )
}

export default Navbar