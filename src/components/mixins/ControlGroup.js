// ----
// Dependencies
import React, { Component } from 'react';


// ----
// BackgroundControls
class ControlGroup extends Component {
    render() {
        const { name, label } = this.props;

        return (
            <div className="card border-0">
                <div className="card-header p-0 text-left bg-secondary" id={`${name}Heading`}>
                    <h2 className="mb-0 p-0">
                        <button className="btn btn-link control-toggle text-light m-0 p-3 h-100 w-100 text-left" type="button" data-toggle="collapse" data-target={`#${name}Controls`} aria-expanded="true" aria-controls={`${name}Controls`}>
                            {label}
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
