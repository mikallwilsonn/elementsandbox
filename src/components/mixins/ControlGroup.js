// ----
// Dependencies
import React, { Component } from 'react';


// ----
// BackgroundControls
class ControlGroup extends Component {
    render() {
        const { name } = this.props;

        return (
            <div className="card">
                <div className="card-header" id={`${name}Heading`}>
                    <h2 className="mb-0">
                        <button className="btn btn-link control-toggle" type="button" data-toggle="collapse" data-target={`#${name}Controls`} aria-expanded="true" aria-controls={`${name}Controls`}>
                            {name}
                        </button>
                    </h2>
                </div>
            
                <div id={`${name}Controls`} className="collapse" aria-labelledby={`${name}Heading`} data-parent="#controls">
                    <div className="card-body">

                        {this.props.children}
    .
                    </div>
                </div>
        </div>
        );
    }
}


// ----
// Export
export default ControlGroup;
