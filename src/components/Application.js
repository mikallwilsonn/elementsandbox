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
