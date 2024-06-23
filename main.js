//===========================================================================================================
// main.js

// app, which controls your application's event lifecycle
// BrowserWindow, which creates and manages app windows
// TODO: TS requires main to be specified
// const { app, BrowserWindow } = require('electron/main')
const { app, BrowserWindow } = require('electron')
const path = require('node:path')

// The createWindow() function loads your web page into a new BrowserWindow instance
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // attach this script to your renderer process
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

// Electron exposes app.whenReady() as a helper specifically for the ready event to avoid subtle
// pitfalls with directly listening to that event in particular
app.whenReady().then(() => {
    createWindow()

    // macOS apps generally continue running even without any windows open. Activating the app when no windows
    // are available should open a new one.
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow()
    })
})

// On Windows and Linux, closing all windows will generally quit an application entirely
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})

//===========================================================================================================
