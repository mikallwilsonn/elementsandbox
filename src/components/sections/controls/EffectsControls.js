// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
import RangeControl from '../../mixins/RangeControl';
// import InputControl from '../../mixins/InputControl';
// import ChoiceControl from '../../mixins/ChoiceControl';
// import ColorControl from '../../mixins/ColorControl';


/* 

*/



// ----
// BackgroundControls
const EffectsControls = () => {
    return (
        <ControlGroup name="effects" label="Effects">


            <RangeControl 
                label="Blur" 
                styleName="blur" 
                min="0"
                max="100" 
                step="0.01"
                value="0" 
                sizing="px"
            />


            <RangeControl 
                label="Brightness" 
                styleName="brightness" 
                min="0"
                max="10" 
                step="0.25"
                value="1" 
            />


            <RangeControl 
                label="Contrast" 
                styleName="brightness" 
                min="-100"
                max="200" 
                step="0.25"
                value="100"
                sizing="%" 
            />


            <RangeControl 
                label="Grayscale" 
                styleName="grayscale" 
                min="0"
                max="100" 
                step="0.25"
                value="0"
                sizing="%" 
            />


            <RangeControl 
                label="Hue Rotate" 
                styleName="hue-rotate" 
                min="-360"
                max="360" 
                step="1"
                value="0"
                sizing="deg" 
            />


            <RangeControl 
                label="Invert" 
                styleName="invert" 
                min="0"
                max="100" 
                step="1"
                value="0"
                sizing="%" 
            />


            <RangeControl 
                label="Saturate" 
                styleName="saturate" 
                min="0"
                max="1000" 
                step="1"
                value="100"
                sizing="%" 
            />

            <RangeControl 
                label="Sepia" 
                styleName="sepia" 
                min="0"
                max="100" 
                step="1"
                value="0"
                sizing="%" 
            />


        </ControlGroup>
    );
}


// ----
// Export
export default EffectsControls;
