// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
import ChoiceControl from '../../mixins/ChoiceControl';
import RangeControl from '../../mixins/RangeControl';
// import InputControl from '../../mixins/InputControl';


// ----
// BackgroundControls
const BoxModelControls = () => {
    return (
        <ControlGroup name="dimensions" label="Dimensions &amp; Display">

            <ChoiceControl 
                label="Display" 
                styleName="display" 
                options={[ 'inline', 'block', 'flex', 'grid', 'inline-block', 'inline-flex',
                            'inline-grid', 'inline-table', 'list-item', 'run-in',
                            'table', 'table-caption', 'table-column-group', 'table-header-group',
                            'table-footer-group', 'table-row-group', 'table-cell', 'table-column',
                            'table-row', 'none', 'initial' ]} 
            />


            <ChoiceControl 
                label="Box Sizing" 
                styleName="boz-sizing" 
                options={[ 'content-box', 'border-box', 'initial' ]} 
            />


            <div className="dropdown-divider mt-4 mb-4"></div>


            <RangeControl 
                label="Height" 
                styleName="height" 
                min="0"
                max="100" 
                step="1"
                sizing="%" 
                value="10"
            />


            <RangeControl 
                label="Width" 
                styleName="width" 
                min="0"
                max="100" 
                step="1"
                sizing="%" 
                value="10"
            />


            <RangeControl 
                label="Opacity" 
                styleName="opacity" 
                min="0"
                max="1" 
                step="0.05"
                value="1"
            />

            <RangeControl 
                label="Padding" 
                styleName="padding" 
                min="0"
                max="250" 
                step="1"
                sizing="px" 
                value="25"
            />


            <RangeControl 
                label="Margin" 
                styleName="margin" 
                min="0"
                max="250" 
                step="1"
                sizing="px" 
                value="0"
            />


            <div className="dropdown-divider mt-4 mb-4"></div>


            <ChoiceControl 
                label="Position" 
                styleName="position" 
                options={[ 'static', 'absolute', 'fixed', 'relative',
                    'sticky', 'initial' ]} 
            />


        </ControlGroup>
    );
}


// ----
// Export
export default BoxModelControls;
