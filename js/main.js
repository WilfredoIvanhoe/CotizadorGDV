var remote = require('electron').remote;

function resize() {
    var win = remote.getCurrentWindow();
    win.maximize()
}

$("document").ready(function(){
	resize()
})

$("#new-proy-btn").click(function() {
	//$("#proy-bttns").hide()
})