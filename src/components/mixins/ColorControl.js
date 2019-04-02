// ----
// Dependencies
import React from 'react';

// ----
// Control
const ColorControl = ({ label, styleName, help, }) => {
    return (
        <div className="form-group text-theme-primary mt-2 pt-1 pb-1">
            <label htmlFor={styleName}>
                {label}
            </label>

            <input type="color" className="form-control element-control" id={styleName} name={styleName} aria-describedby={`${styleName}Help`} placeholder="" />

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
export default ColorControl;