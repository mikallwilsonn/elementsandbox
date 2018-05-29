const electron = require( 'electron' );

const { app, BrowserWindow } = require( 'electron' );

function createWindow() {
    win = new BrowserWindow({
        width: 1250,
        minWidth: 1000,
        height: 750,
        minHeight: 500,
        show: true,
        fullscreen: false,
        maximizable: true,
        resizable: true
    });

    win.loadFile( 'index.html' );

    win.webContents.openDevTools();

    win.on( 'closed', () => {
        win = null;
    });

}


app.on( 'ready', createWindow );
app.on( 'activate', () => {
    if ( win === null ) {
        createWindow();
    }
});
