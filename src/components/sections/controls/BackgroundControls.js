// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
// import RangeControl from '../../mixins/RangeControl';
import ChoiceControl from '../../mixins/ChoiceControl';
import InputControl from '../../mixins/InputControl';


// ----
// BackgroundControls
const BackgroundControls = () => {
    return (
        <ControlGroup name="background" label="Background">

            <ChoiceControl 
                label="Background Attachment" 
                styleName="background-attachment" 
                options={['scroll', 'fixed', 'local', 'initial', 'inherit']} 
            />

            <ChoiceControl 
                label="Background Blend Mode" 
                styleName="background-blend-mode" 
                options={['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten','color-dodge', 'saturation', 'color', 'luminosity']} 
            />

            <ChoiceControl 
                label="Background Clip" 
                styleName="background-clip" 
                options={['border-box', 'padding-box', 'content-box', 'initial', 'inherit']} 
            />

            <InputControl 
                label="Background Color" 
                styleName="background-color" 
                help="Enter any valid CSS color value."
            />

            <InputControl 
                label="Background Image" 
                styleName="background-image" 
                help="Enter a URL to your desired image."
            />

            <ChoiceControl 
                label="Background Origin" 
                styleName="background-origin" 
                options={['border-box', 'padding-box', 'content-box', 'initial', 'inherit']} 
            />

            <ChoiceControl 
                label="Background Position" 
                styleName="background-position" 
                options={['left top', 'left center', 'left bottom', 'right top', 'right center', 'right bottom', 'center top', 'center center', 'center bottom']} 
            />

            <ChoiceControl 
                label="Background Repeat" 
                styleName="background-repeat" 
                options={['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'round', 'initial', 'inherit']} 
            />

            <ChoiceControl 
                label="Background Size" 
                styleName="background-size" 
                options={['auto', 'cover', 'contain', 'initial', 'inherit' ]} 
            />

        </ControlGroup>
    );
}


// ----
// Export
export default BackgroundControls;
