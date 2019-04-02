// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
import RangeControl from '../../mixins/RangeControl';
// import InputControl from '../../mixins/InputControl';
import ChoiceControl from '../../mixins/ChoiceControl';
// import ColorControl from '../../mixins/ColorControl';


// ----
// BackgroundControls
const TransformControls = () => {
    return (
        <ControlGroup name="transform" label="Transforms">

            <ChoiceControl 
                label="Transform Origin (X-Axis)" 
                styleName="transform-origin-x" 
                options={['left', 'center', 'right', 'initial']} 
            />


            <ChoiceControl 
                label="Transform Origin (X-Axis)" 
                styleName="transform-origin-y" 
                options={['top', 'center', 'bottom', 'initial']} 
            />


            <div className="dropdown-divider mt-4 mb-4"></div>


            <RangeControl 
                label="Scale" 
                styleName="scale" 
                min="-2"
                max="10" 
                step="0.25"
                value="0"
            />


            <div className="dropdown-divider mt-4 mb-4"></div>


            <RangeControl 
                label="Rotate" 
                styleName="rotate" 
                min="-360"
                max="360" 
                step="1"
                sizing="deg" 
                value="0"
            />

            <RangeControl 
                label="Rotate-X" 
                styleName="rotate-x" 
                min="-360"
                max="360" 
                step="1"
                sizing="deg" 
                value="0"
            />

            <RangeControl 
                label="Rotate-Y" 
                styleName="rotate-y" 
                min="-360"
                max="360" 
                step="1"
                sizing="deg" 
                value="0"
            />


            <div className="dropdown-divider mt-4 mb-4"></div>


            <RangeControl 
                label="Translate-X" 
                styleName="translateX" 
                min="-200"
                max="200" 
                step="1"
                sizing="%" 
                value="0"
            />

            <RangeControl 
                label="Translate-Y" 
                styleName="translateY" 
                min="-200"
                max="200" 
                step="1"
                sizing="%" 
                value="0"
            />  


            <div className="dropdown-divider mt-4 mb-4"></div>


            <RangeControl 
                label="Skew-X" 
                styleName="skewX" 
                min="-360"
                max="360" 
                step="1"
                sizing="deg" 
                value="0"
            />

            <RangeControl 
                label="Skew-Y" 
                styleName="skewY" 
                min="-360"
                max="360" 
                step="1"
                sizing="deg" 
                value="0"
            /> 
    

        </ControlGroup>
    );
}


// ----
// Export
export default TransformControls;
