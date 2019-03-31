// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
import RangeControl from '../../mixins/RangeControl';


// ----
// BackgroundControls
const BorderControls = () => {
    return (
        <ControlGroup name="border">

            <RangeControl 
                label="Border Radius" 
                styleName="border-radius" 
                min="0"
                max="250" 
                step="1"
                sizing="px" 
                value="0"
            />


        </ControlGroup>
    );
}


// ----
// Export
export default BorderControls;
