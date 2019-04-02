// ----
// Dependencies
import React from 'react';

// ----
// Control
const ImageControl = ({ label, styleName, help, sizing }) => {
    return (
        <div className="form-group text-theme-primary mt-2 pt-1 pb-1">
            <label htmlFor={styleName}>
                {label}
            </label>

            <input type="text" className="form-control image-control" id={styleName} name={styleName} aria-describedby={`${styleName}Help`} placeholder="" data-sizing={sizing} />

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
export default ImageControl;