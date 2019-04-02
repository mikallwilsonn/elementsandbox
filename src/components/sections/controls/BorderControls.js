// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
import RangeControl from '../../mixins/RangeControl';
// import InputControl from '../../mixins/InputControl';
import ChoiceControl from '../../mixins/ChoiceControl';
import ColorControl from '../../mixins/ColorControl';
import ImageControl from '../../mixins/ImageControl';


// ----
// BackgroundControls
const BorderControls = () => {
    return (
        <ControlGroup name="border" label="Border">

            <RangeControl 
                label="Border Width" 
                styleName="border-width" 
                min="0"
                max="100" 
                step="1"
                sizing="px" 
                value="0"
            />

            <ChoiceControl 
                label="Border Style" 
                styleName="border-style" 
                options={['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove','ridge', 'inset', 'outset', 'initial', 'inherit']} 
            />


            <ColorControl 
                label="Border Color" 
                styleName="border-color" 
            />


            <RangeControl 
                label="Border Radius" 
                styleName="border-radius" 
                min="0"
                max="250" 
                step="1"
                sizing="px" 
                value="0"
            />


            <div className="dropdown-divider mt-4 mb-4"></div>


            <ImageControl 
                label="Border Image Source" 
                styleName="border-image-source" 
                help="Enter a URL to your desired image and BE SURE to set a border width above too."
            />


            <RangeControl 
                label="Border Image Slice" 
                styleName="border-image-slice" 
                min="0"
                max="100" 
                step="1"
                sizing="%" 
                value="0"
            />


            <RangeControl 
                label="Border Image Width" 
                styleName="border-image-width" 
                min="0"
                max="100" 
                step="1"
                sizing="px" 
                value="0"
            />


            <RangeControl 
                label="Border Image Outset" 
                styleName="border-image-outset" 
                min="0"
                max="100" 
                step="1"
                sizing="px" 
                value="0"
            />


            <ChoiceControl 
                label="Border Image Repeat" 
                styleName="border-image-repeat" 
                options={['stretch', 'repeat', 'round', 'initial', 'inherit']} 
            />



        </ControlGroup>
    );
}


// ----
// Export
export default BorderControls;
