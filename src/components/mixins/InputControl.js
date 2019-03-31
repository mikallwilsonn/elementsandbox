// ----
// Dependencies
import React from 'react';

// ----
// Control
const InputControl = ({ label, styleName, help }) => {
    return (
        <div className="form-group text-theme-primary mt-5">
            <label htmlFor={styleName}>
                {label}
            </label>

            <input type="email" className="form-control" id={styleName} name={styleName} aria-describedby={`${styleName}Help`} placeholder="" />

            {help ?
                <small id={`${styleName}Help`} className="form-text text-muted mb-2">
                    {help}
                </small>
             : ''}

        </div>
    );
}


// ----
// Export
export default InputControl;