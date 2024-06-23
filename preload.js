//===========================================================================================================
// preload.js
// injected before a web page loads in the renderer
// to add features to your renderer that require privileged access

const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})

//===========================================================================================================