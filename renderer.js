//===========================================================================================================
// renderer.js

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}),
    Node.js (v${versions.node()}),
    and Electron (v${versions.electron()})`

const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', async(e) => {
   
    let num1 = parseInt(document.getElementById("first_number").value);
    let num2 = parseInt(document.getElementById("second_number").value);

    // wait for response
    const response = await window.versions.add(num1, num2)
  
    document.getElementById('tag_result').innerHTML = 
        "C++ Native Addon Add() result (IPC): " + response;
});

const func = async () => {
    // await on ping
    const response = await window.versions.ping()
    // log response (prints pong to debug console)
    console.log(response)
}
    
func()


//===========================================================================================================
