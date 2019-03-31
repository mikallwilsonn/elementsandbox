// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Child Components
import ElementList from './ElementList';
import BackgroundControls from './controls/BackgroundControls';
import BorderControls from './controls/BorderControls';


// ----
// Sidebar
class Sidebar extends Component {
    render() {
        return (
            <section id="Sidebar" className="col-lg-3 m-0 p-2 bg-theme-black text-white">
                <header className="text-center p-3">
                    <h1 className="h3">HTMentaL</h1>
                    <span className="text-muted">Created by <a href="https://github.com/mikallwilsonn/" target="_blank" rel="noopener noreferrer">Michael R. Wilson</a></span>
                </header>

                <div className="col-lg-12 mt-5 d-flex flex-column">

                    <ElementList />

                    <div className="accordion" id="controls">

                        <BackgroundControls     />
                        <BorderControls         />

                    </div>
                </div>
            </section>
        );
    }
}

// ----
// Export Sidebar
export default Sidebar;
