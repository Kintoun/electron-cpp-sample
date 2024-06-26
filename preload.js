//===========================================================================================================
// preload.js
// injected before a web page loads in the renderer
// to add features to your renderer that require privileged access

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
  add: (...args) => ipcRenderer.invoke('add', ...args)
  // we can also expose variables, not just functions
})

//===========================================================================================================