// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Child Components
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

                                    <div className="form-group text-theme-primary mt-3">
                                        <label htmlFor="canvas-background-color">
                                            Canvas Background Color
                                        </label>

                                        <input type="text" className="form-control element-control" id="canvas-background-color" name="canvas-background-color" aria-describedby="canvas-background-colorHelp" placeholder="" />

                                        <small id="canvas-background-colorHelp" className="form-text text-muted mb-2">
                                            Enter any valid CSS color value.
                                        </small>
                                    </div>


                                    <div className="form-group text-theme-primary mt-3">
                                        <label htmlFor="canvas-background-image">
                                            Canvas Background Image
                                        </label>

                                        <input type="text" className="form-control element-control" id="canvas-background-image" name="canvas-background-image" aria-describedby="canvas-background-imageHelp" placeholder="" />

                                        <small id="canvas-background-imageHelp" className="form-text text-muted mb-2">
                                            Enter any valid image URL.
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
