// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux'


// ----
// Child Components


// ----
// Actions
import * as actions from '../actions';


// ----
// App class
class Application extends Component {
    render() {
        return (
            <div className="col-lg-12 d-flex row m-0 p-0">
                HTMentaL
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
