// ----
// Dependencies
import React from 'react';

// ----
// Control
const RangeControl = ({ label, styleName, min = 0, max, step = 1, sizing, value = 0, help }) => {
    return (
        <div className="form-group mt-2 pt-1 pb-1">
            <label htmlFor={styleName} className="text-theme-primary font-medium">
                {label}
            </label>
            <input 
                type="range" 
                className="form-control-range element-control" 
                name={styleName}
                id={styleName} 
                defaultValue={value}
                min={min}
                max={max}
                step={step} 
                data-sizing={sizing} 
                //onChange={() => console.log( `changing ${styleName}` )}
            />
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
export default RangeControl;
