//===========================================================================================================
// renderer.js

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}),
    Node.js (v${versions.node()}),
    and Electron (v${versions.electron()})`

const func = async () => {
    // await on ping
    const response = await window.versions.ping()
    // log response (prints pong to debug console)
    console.log(response)
}
    
func()

//===========================================================================================================
