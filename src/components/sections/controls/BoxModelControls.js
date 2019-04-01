// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import ControlGroup from '../../mixins/ControlGroup';
import ChoiceControl from '../../mixins/ChoiceControl';
import RangeControl from '../../mixins/RangeControl';


// ----
// BackgroundControls
const BoxModelControls = () => {
    return (
        <ControlGroup name="box-model" label="Box Model">

            <ChoiceControl 
                label="Display" 
                styleName="display" 
                options={['inline', 'block', 'flex', 'grid', 'inline-block', 'inline-flex',
                            'inline-grid', 'inline-table', 'list-item', 'run-in',
                            'table', 'table-caption', 'table-column-group', 'table-header-group',
                            'table-footer-group', 'table-row-group', 'table-cell', 'table-column',
                            'table-row', 'none', 'initial', 'inherit']} 
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
                value="0"
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


            <ChoiceControl 
                label="Position" 
                styleName="position" 
                options={['static', 'absolute', 'fixed', 'relative',
                    'sticky', 'initial', 'inherit']} 
            />


        </ControlGroup>
    );
}


// ----
// Export
export default BoxModelControls;
