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
import TransformControls from './controls/TransformControls';
import EffectsControls from './controls/EffectsControls';
import ShadowControls from './controls/ShadowControls';


// ----
// Sidebar
class Sidebar extends Component {

    updateElementText( value ) {
        const element = document.querySelector( '#Element' );
        element.innerHTML = value;
    }

    updateElementCSS( value ) {
        const style = document.querySelector( '#CustomStyles' );
        style.innerHTML = value;
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
                                            Element Inner Content
                                        </label>

                                        <textarea
                                            type="text" className="form-control" id="element-text-content" name="element-text-content" aria-describedby="element-text-contentHelp" placeholder="" 
                                            onChange={( event ) => this.updateElementText( event.target.value )}></textarea>

                                        <small id="element-text-contentHelp" className="form-text text-muted mb-2">
                                            Accepts plain text or HTML.
                                        </small>
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

                                    <div className="dropdown-divider mt-3 mb-3"></div>

                                    <div className="form-group text-theme-primary mt-3">
                                        <label htmlFor="element-text-content">
                                            Custom CSS
                                        </label>

                                        <textarea
                                            type="text" className="form-control" id="element-css-content" name="element-css-content" aria-describedby="element-css-contentHelp" placeholder="" 
                                            onChange={( event ) => this.updateElementCSS( event.target.value )}></textarea>

                                        <small id="element-css-contentHelp" className="form-text text-muted mb-2">
                                            Enter your custom CSS styles. <br /><br />
                                            You can select your element with <code>#Element</code> and the background "canvas" with <code>#ElementCanvas</code>. <br /><br />
                                            It is also recommended that you use <code>.class</code> and/or <code>#id</code>'s to select your elements as you styles may interfere with other parts of the User Interface. <br /><br />
                                            <strong>NOTE:</strong> Some or maybe ALL of your custom styles may not work unless you use <code>!important</code>.
                                        </small>
                                    </div>

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
                        <EffectsControls        />
                        <ShadowControls         />
                        <TransformControls      />
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
