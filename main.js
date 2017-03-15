const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow(){
	//Create Browser Window
	win = new BrowserWindow({width : 350, height : 420})

	win.loadURL(url.format({
		pathname : path.join(__dirname, 'index.html'),
		protocole : 'file',
		slashes : true
	}))

	//When closed function
	win.on('closed', () =>{
		win = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () =>{
	if(process.platform != 'darwin')
		app.quit()
})