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

                <div className="notices m-0 p-2 col-lg-12 d-flex flex-column align-items-center">
                    <div className="alert alert-dark mobile-notice font-medium row justify-conent-between align-items-center" role="alert">
                        <span>
                            For the best experience, it is recommended to use this on desktop.
                        </span>
                        

                        <button type="button" className="close ml-3" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="alert m-0 alert-primary demo-notice font-medium row justify-conent-between align-items-center" role="alert">
                        <span className="col-auto">
                            This app is still in a beta-like stage and is purely for demo purposes at this point. Some controls and settings may not work as intended.
                        </span>

                        <button type="button" className="col-auto close ml-3" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">I Understand</span>
                        </button>
                    </div>
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



 

