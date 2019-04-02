// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Child Components
import ColorControl from '../mixins/ColorControl';
import ImageControl from '../mixins/ImageControl';
import ChoiceControl from '../mixins/ChoiceControl';

import ElementList from './ElementList';
import BackgroundControls from './controls/BackgroundControls';
import BorderControls from './controls/BorderControls';
import BoxModelControls from './controls/BoxModelControls';
import TypographyControls from './controls/TypographyControls';


// ----
// Sidebar
class Sidebar extends Component {

    updateElementText( value ) {
        const element = document.querySelector( '#Element' );
        element.textContent = value;
    }

    render() {
        return (
            <section id="Sidebar" className="col-lg-3 m-0 p-2 bg-theme-black text-white">
                <header className="text-center p-3">
                    <h1 className="h3">Markup Sandbox</h1>
                    <span className="text-muted">Created by <a href="https://github.com/mikallwilsonn/" className="text-theme-primary" target="_blank" rel="noopener noreferrer">Michael R. Wilson</a></span>
                </header>

                <div className="col-lg-12 mt-5 d-flex flex-column">

                    
                    <div className="accordion" id="canvasSettings">
                        <div className="card border-0">
                            <div className="card-header p-0 text-left bg-secondary" id="headingOne">
                            <h2 className="mb-0 p-0">
                                <button className="btn btn-link control-toggle text-white m-0 p-3 h-100 w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Canvas Settings
                                </button>
                            </h2>
                            </div>

                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#canvasSettings">
                                <div className="card-body">

                                    <ElementList />


                                    <div className="form-group text-theme-primary mt-3">
                                        <label htmlFor="element-text-content">
                                            Text Content
                                        </label>

                                        <input type="text" className="form-control" id="element-text-content" name="element-text-content" aria-describedby="element-text-contentHelp" placeholder="" 
                                            onChange={( event ) => this.updateElementText( event.target.value )}
                                        />

                                    </div>


                                    <ColorControl 
                                        label="Canvas Background Color" 
                                        styleName="canvas-background-color" 
                                    />

                                    <ImageControl 
                                        label="Canvas Background Image" 
                                        styleName="canvas-background-image" 
                                        help="Enter a URL to your desired image."
                                    />

                                    <ChoiceControl 
                                        label="Canvas Background Origin" 
                                        styleName="canvas-background-origin" 
                                        options={['border-box', 'padding-box', 'content-box', 'initial', 'inherit']} 
                                    />

                                    <ChoiceControl 
                                        label="Canvas Background Position" 
                                        styleName="canvas-background-position" 
                                        options={['left top', 'left center', 'left bottom', 'right top', 'right center', 'right bottom', 'center top', 'center center', 'center bottom']} 
                                    />

                                    <ChoiceControl 
                                        label="Canvas Background Repeat" 
                                        styleName="canvas-background-repeat" 
                                        options={['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'round', 'initial', 'inherit']} 
                                    />

                                    <ChoiceControl 
                                        label="Canvas Background Size" 
                                        styleName="canvas-background-size" 
                                        options={['auto', 'cover', 'contain', 'initial', 'inherit' ]} 
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <h2 className="h6 text-theme-primary">Element Styles</h2>

                    <div className="accordion pb-5" id="controls">

                        <BackgroundControls     />
                        <BorderControls         />
                        <BoxModelControls       />
                        <TypographyControls     />

                    </div>
                </div>
            </section>
        );
    }
}

// ----
// Export Sidebar
export default Sidebar;
