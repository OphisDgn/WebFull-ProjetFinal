const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
  // create main browser window
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        icon: 'assets/img/logo.png',  
        width: 1280,
        height: 720,
        show: false, // don't show the main window
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // create a new `splash`-Window
    splash = new BrowserWindow({width: 300, height: 450, icon:"assets/img/logo.png", transparent: false, frame: false});
    splash.loadFile(`loader.html`);
    setTimeout(function () {
        // console.log("Loading main window")
        mainWindow.loadURL("http://localhost:3000");
    }, 1500);
    
    
    // if main window is ready to show, then destroy the splash window and show up the main window
    mainWindow.once('ready-to-show', () => {
        console.log("ready")
        splash.close();
        mainWindow.show();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
    
});