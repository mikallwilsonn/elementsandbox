// ----
// Dependencies
import React from 'react';

// ----
// Control
const ChoiceControl = ({ label, styleName, options, help }) => {
    return (
        <div className="form-group mt-2 pt-1 pb-1">
            <label htmlFor={styleName} className="text-theme-primary font-medium">
                {label}
            </label>
            <select 
                className="form-control element-control" 
                name={styleName}
                id={styleName} 
                defaultValue=''
            >
                <option disabled value='' className="text-muted">
                    Default / Initial
                </option>

                {options.map( option => {
                    return (
                        <option 
                            value={option} 
                            key={option}
                        >
                            {option}
                        </option>
                    );
                })}
            </select>

            {help ?
                <small id={`${styleName}Help`} class="form-text text-muted mb-3">
                    {help}
                </small>
             : ''}
        </div>
    );
}


// ----
// Export
export default ChoiceControl;
