import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group



export default class MyAccount extends Component {
    render(){
        
        return(
            <form>
            
                <b>First Name: </b><input type='text' placeholder='First Name'/>
                <b> Last Name: </b><input type='text' placeholder='Last Name'/><br></br><br></br>
                <b>Address</b><br></br><textarea></textarea><br></br>
                <table >
                    <tr>
                        <th>Item</th>
                        <th>Date</th><br></br>
                    </tr>
                </table>
                <button>SAVE</button>
            
            </form>
        );
    }
}