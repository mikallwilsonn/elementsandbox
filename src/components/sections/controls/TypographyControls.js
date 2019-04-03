// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
// import InputControl from '../../mixins/InputControl';
import ChoiceControl from '../../mixins/ChoiceControl';
import RangeControl from '../../mixins/RangeControl';
import ColorControl from '../../mixins/ColorControl';


// ----
// BackgroundControls
const TypographyControls = () => {
    return (
        <ControlGroup name="typography" label="Typography">


            <ColorControl 
                label="Font Color" 
                styleName="color" 
                help="Enter any valid CSS color value."
            />


            <RangeControl 
                label="Font Size" 
                styleName="font-size" 
                min="0"
                max="100" 
                step="1"
                sizing="px" 
                value="13"
            />


            <div className="dropdown-divider mt-4 mb-4"></div>


            <ChoiceControl 
                label="Font Family" 
                styleName="font-family" 
                options={['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy']} 
            />


            <ChoiceControl 
                label="Font Style" 
                styleName="font-style" 
                options={[ 'normal', 'italic', 'oblique', 'initial' ]} 
            />


            <ChoiceControl 
                label="Font Variant" 
                styleName="font-variant" 
                options={[ 'normal', 'small-caps', 'initial' ]} 
            />


            <ChoiceControl 
                label="Font Weight" 
                styleName="font-weight" 
                options={[ 'normal', 'bold', 'bolder', 'lighter', 'initial' ]} 
            />


            <ChoiceControl 
                label="Text Alignment" 
                styleName="text-align" 
                options={[ 'left', 'right', 'center', 'justify', 'initial' ]} 
            />


            <div className="dropdown-divider mt-4 mb-4"></div>


            <RangeControl 
                label="Letter Spacing" 
                styleName="letter-spacing" 
                min="-50"
                max="50" 
                step="1"
                sizing="px" 
                value="0"
            />


            <RangeControl 
                label="Line Height" 
                styleName="line-height" 
                min="-100"
                max="100" 
                step="1"
                sizing="px" 
                value="0"
            />


            <RangeControl 
                label="Word Spacing" 
                styleName="word-spacing" 
                min="-50"
                max="50" 
                step="1"
                sizing="px" 
                value="0"
            />


            <ChoiceControl 
                label="Font Kerning" 
                styleName="text-align" 
                options={[ 'auto', 'normal', 'none' ]} 
            />


        </ControlGroup>
    );
}


// ----
// Export
export default TypographyControls;
