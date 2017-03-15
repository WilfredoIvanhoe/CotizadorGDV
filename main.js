const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createLoginWindow(){
	//Create Browser Window
	win = new BrowserWindow({width : 500, height : 630})

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

app.on('ready', createLoginWindow)

app.on('window-all-closed', () =>{
	if(process.platform != 'darwin')
		app.quit()
})