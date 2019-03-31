// ----
// Dependencies
import React, { Component } from 'react';
import elements from '../../data/elements';



// ----
// ElementList
class ElementList extends Component {

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
                <select className="form-control">
                    <option disabled defaultValue>Choose An Element</option>
                    {this.renderOptions()}
                </select>
            </div>
        );
    }
}


// ----
// Export ElementList
export default ElementList;
