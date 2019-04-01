// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
import InputControl from '../../mixins/InputControl';
import ChoiceControl from '../../mixins/ChoiceControl';


// ----
// BackgroundControls
const TypographyControls = () => {
    return (
        <ControlGroup name="typography" label="Typography">


            <InputControl 
                label="Font Color" 
                styleName="color" 
                help="Enter any valid CSS color value."
            />


            <InputControl 
                label="Font Size" 
                styleName="font-size" 
                help="Values calculated as px"
                sizing="px"
            />


            <ChoiceControl 
                label="Font Style" 
                styleName="font-style" 
                options={['normal', 'italic', 'oblique', 'initial', 'inherit']} 
            />


            <ChoiceControl 
                label="Font Variant" 
                styleName="font-variant" 
                options={['normal', 'small-caps', 'initial', 'inherit']} 
            />


            <ChoiceControl 
                label="Font Weight" 
                styleName="font-weight" 
                options={['normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit']} 
            />


            <ChoiceControl 
                label="Text Alignment" 
                styleName="text-align" 
                options={['left', 'right', 'center', 'justify', 'initial', 'inherit']} 
            />


            <InputControl 
                label="Letter Spacing" 
                styleName="letter-spacing" 
                help="Values calculated as px"
                sizing="px"
            />


            <InputControl 
                label="Line Height" 
                styleName="line-height" 
                help="Values calculated as px"
                sizing="px"
            />

            <InputControl 
                label="Word Spacing" 
                styleName="word-spacing" 
                help="Values calculated as px"
                sizing="px"
            />


        </ControlGroup>
    );
}


// ----
// Export
export default TypographyControls;
