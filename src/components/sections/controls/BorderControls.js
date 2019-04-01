// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
import RangeControl from '../../mixins/RangeControl';
import InputControl from '../../mixins/InputControl';
import ChoiceControl from '../../mixins/ChoiceControl';


// ----
// BackgroundControls
const BorderControls = () => {
    return (
        <ControlGroup name="border" label="Border">

            <InputControl 
                label="Border Width" 
                styleName="border-width" 
                help="Values will be calculated as px."
                sizing="px"
            />


            <ChoiceControl 
                label="Border Style" 
                styleName="border-style" 
                options={['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove','ridge', 'inset', 'outset', 'initial', 'inherit']} 
            />


            <InputControl 
                label="Border Color" 
                styleName="border-color" 
                help="Enter any valid CSS color value. Will inherit font color if left empty."
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


            <InputControl 
                label="Border Image Source" 
                styleName="border-image-source" 
                help="Enter any valid image URL."
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


            <InputControl 
                label="Border Image Width" 
                styleName="border-image-width" 
                help="Values will be calculated as px."
                sizing="px"
            />


            <InputControl 
                label="Border Image Outset" 
                styleName="border-image-outset" 
                help="Values will be calculated as px."
                sizing="px"
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
