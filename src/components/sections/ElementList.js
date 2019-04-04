// ----
// Dependencies
import React, { Component } from 'react';
import elements from '../../data/elements';
import { connect } from 'react-redux'
import * as actions from '../../actions';



// ----
// ElementList
class ElementList extends Component {

    componentDidMount() {
        const elementGenerator = document.querySelector( "#ElementGenerator" );
        const elementCanvas = document.querySelector( "#ElementCanvas" );

        elementGenerator.addEventListener( 'change', () => {
            // Remove current element from page
            let prevElement = document.querySelector( "#Element" );
            let prevElementText = prevElement.innerHTML;
            prevElement.parentNode.removeChild( prevElement );

            // Get value of select menu
            const element = elementGenerator.options[ elementGenerator.selectedIndex ].value;
            // Stores the current element in the Redux store
            this.props.setCurrentElement( element );

            // Create new element and append it to the ElementCanvas
            let newElement = document.createElement( element );

            newElement.setAttribute( 'id', 'Element' );
            elementCanvas.appendChild( newElement );

            // After new element is appendeed set it's inner text
            let appendedElement = document.querySelector( "#Element" );
            let text = document.querySelector( '#element-text-content' ).value;
            appendedElement.innerHTML = text || prevElementText;

        }, false );
    }


    renderOptions() {
        return elements.map( element => {
            return (
                <option value={element} key={element}>
                    &lt;{element}&gt;
                </option>
            );
        });
    }

    render() {
        return (
            <div className="form-group">
                
                <label htmlFor="ElementGenerator" className="text-theme-primary">
                    Element to Customize
                </label>

                <select 
                    id="ElementGenerator" 
                    className="form-control" 
                    defaultValue=''
                >
                    <option disabled value=''>Choose An Element</option>

                    {this.renderOptions()}
                </select>
            </div>
        );
    }
}


function mapStateToProps({ currentElement }) {
    return { currentElement };
}


// ----
// Export ElementList
export default connect( mapStateToProps, actions )( ElementList );
