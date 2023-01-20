const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1270,
        height: 720,
        resizable: false,
        autoHideMenuBar: true,
    })
    win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})