// ----
// Dependencies
import React, { Component } from 'react';
import elements from '../../data/elements';



// ----
// ElementList
class ElementList extends Component {

    componentDidMount() {
        const elementGenerator = document.querySelector( "#ElementGenerator" );
        const elementCanvas = document.querySelector( "#ElementCanvas" );

        elementGenerator.addEventListener( 'change', function(){
            // Remove current element from page
            let prevElement = document.querySelector( "#Element" );
            let prevElementText = prevElement.textContent;
            prevElement.parentNode.removeChild( prevElement );

            // Get value of select menu
            const element = elementGenerator.options[ elementGenerator.selectedIndex ].value;

            // Create new element and append it to the ElementCanvas
            let newElement = document.createElement( element );
            newElement.setAttribute( 'id', 'Element' );
            elementCanvas.appendChild( newElement );

            // After new element is appendeed set it's inner text
            let appendedElement = document.querySelector( "#Element" );
            let text = document.querySelector( '#element-text-content' ).value;
            appendedElement.textContent = text || prevElementText;

        }, false );
    }


    renderOptions() {
        return elements.map( element => {
            return (
                <option value={element} key={element}>
                    &lt; {element} &gt;
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
                <select id="ElementGenerator" className="form-control">
                    <option disabled defaultValue selected>Choose An Element</option>
                    {this.renderOptions()}
                </select>
            </div>
        );
    }
}


// ----
// Export ElementList
export default ElementList;
