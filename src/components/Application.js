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

    handleImageUpdate() {
        document.documentElement.style.setProperty(`--${this.name}`, `url('${this.value}')`);
    }

    componentDidMount() {

        this.props.setCurrentElement( 'div' );

        const inputs = document.querySelectorAll( '.element-control' );
        
        inputs.forEach( input => {
            if ( input.classList.contains( '.image-control' ) ) {
                input.addEventListener( 'change', this.handleImageUpdate );
            } else {
                input.addEventListener( 'change', this.handleUpdate );
            }
            
        });


        const ImageInputs = document.querySelectorAll( '.image-control' );

        ImageInputs.forEach( 
            input => input.addEventListener( 'change', this.handleImageUpdate )
        );

    }

    render() {
        return (
            <div className="col-lg-12 h-100 d-flex row m-0 p-0">
                <Sidebar        />
                <ElementCanvas  />

                <div className="alert alert-dark mobile-notice" role="alert">
                    For the best experience, it is recommended to use this on desktop.

                    <button type="button" className="close ml-3" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
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



 

