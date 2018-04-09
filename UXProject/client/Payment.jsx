import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group



export default class Payment extends Component {
    render(){
        
        return(
            <form>
            <h2>Payment</h2>
                <b>Card Title: </b><input type='text' placeholder='First Name'/><br></br>
                <b>Card Number: </b><input type='text' placeholder='Last Name'/><br></br>
                <b>CCV: </b><input type='text' placeholder='###-#'/><br></br>
                <b>Expire Date: </b><input type='text' placeholder='MM/yy'/><br></br>
                <b>Address1: </b><input type='text' placeholder='Region'/><br></br>
                <b>Address2: </b><input type='text' placeholder='Street'/><br></br>
                <b>Telephone: </b><input type='text' placeholder='(###)####-####'/><br></br>
                <button>Continue</button>
            
            </form>
        );
    }
}