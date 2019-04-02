// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
import RangeControl from '../../mixins/RangeControl';
// import InputControl from '../../mixins/InputControl';
// import ChoiceControl from '../../mixins/ChoiceControl';
import ColorControl from '../../mixins/ColorControl';


/* 

*/



// ----
// BackgroundControls
const ShadowControls = () => {
    return (
        <ControlGroup name="shadows" label="Shadows">

            <RangeControl 
                label="Text Shadow (Horizontal Distance)" 
                styleName="text-shadow-horizontal" 
                min="-10"
                max="10" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <RangeControl 
                label="Text Shadow (Vertical Distance)" 
                styleName="text-shadow-vertical" 
                min="-10"
                max="10" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <RangeControl 
                label="Text Shadow (blur)" 
                styleName="text-shadow-blur" 
                min="0"
                max="10" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <ColorControl 
                label="Text Shadow Color" 
                styleName="text-shadow-color" 
            />


            <div className="dropdown-divider mt-4 mb-4"></div>


            <RangeControl 
                label="Box Shadow (Horizontal Distance)" 
                styleName="box-shadow-offset-x" 
                min="-100"
                max="100" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <RangeControl 
                label="Box Shadow (Vertical Distance)" 
                styleName="box-shadow-offset-y" 
                min="-100"
                max="100" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <RangeControl 
                label="Box Shadow Blur" 
                styleName="box-shadow-blur" 
                min="-100"
                max="100" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <RangeControl 
                label="Box Shadow Spread Radius" 
                styleName="box-shadow-spread-radius" 
                min="-100"
                max="100" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <ColorControl 
                label="Box Shadow Color" 
                styleName="box-shadow-color" 
            />

            <div className="dropdown-divider mt-4 mb-4"></div>

            <RangeControl 
                label="Inset Box Shadow (Horizontal Distance)" 
                styleName="inset-box-shadow-offset-x" 
                min="-100"
                max="100" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <RangeControl 
                label="Inset Box Shadow (Vertical Distance)" 
                styleName="inset-box-shadow-offset-y" 
                min="-100"
                max="100" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <RangeControl 
                label="Inset Box Shadow Blur" 
                styleName="inset-box-shadow-blur" 
                min="-100"
                max="100" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <RangeControl 
                label="Inset Box Shadow Spread Radius" 
                styleName="inset-box-shadow-spread-radius" 
                min="-100"
                max="100" 
                step="0.1"
                value="0" 
                sizing="px"
            />


            <ColorControl 
                label="Inset Box Shadow Color" 
                styleName="inset-box-shadow-color" 
            />


        </ControlGroup>
    );
}


// ----
// Export
export default ShadowControls;
