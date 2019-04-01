// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux'


// ----
// Child Components
import Sidebar from './sections/Sidebar';
import ElementCanvas from './sections/ElementCanvas';


// ----
// Actions
import * as actions from '../actions';


// ----
// App class
class Application extends Component {

    handleUpdate() {
        let suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    componentDidMount() {
        const inputs = document.querySelectorAll( '.element-control' );
        inputs.forEach( 
            input => input.addEventListener( 'change', this.handleUpdate ));

        inputs.forEach( input => input.addEventListener( 'mousedown', function() {
            inputs.forEach( 
                input => input.addEventListener( 'mousemove', this.handleUpdate ));
        }));

        inputs.forEach( input => input.addEventListener( 'mouseup', function() {
            return;
        }));
    }

    render() {
        return (
            <div className="col-lg-12 h-100 d-flex row m-0 p-0">
                <Sidebar        />
                <ElementCanvas  />
            </div>
        );
    }
}


function mapStateToProps() {
    return {};
}


// ----
// Export
export default connect( mapStateToProps, actions )( Application );



 

