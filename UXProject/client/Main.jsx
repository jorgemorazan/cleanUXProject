import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group

export default class Main extends Component {

    render(){
        return (
           	<form>
           		<label>
                	origen:
                	<input type="text" name="origen"/>
            	</label>
            	<label>
               		 destino:
               		 <input type="text" name="origen"/>
            	</label>
            	<label>
               	 	Fecha ida:
                	<input type="text" name="origen"/>
            	</label>
            	<label>
                	Fecha de Regreso:
                	<input type="text" name="origen"/>
            	</label>
            	    <h3>clase </h3>
        	 	<select>
            		<option value="pedo">pedo</option>
             		<option value="caca">caca</option>
        	 	</select>
        	</form>

        );
    }
}