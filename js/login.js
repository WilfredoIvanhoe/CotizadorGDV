var users = [{user: "admin", pass: "admin"}, {user: "user1", pass:"pass"}, {user: "1", pass:"1"}];

function loginf(){ //LOGIN FUNCTION
	var username = $("#login-username").val()
	var password = $("#login-password").val()
	var is_valid = false;

	$.each(users, function(index, value){
		console.log(value)
		if(value.user == username && value.pass== password){
			is_valid = true
			location.href ="./main.html"
		}
	})

	if (!is_valid) {
		$("#login-username").val("")
		$("#login-password").val("")
		$("#warning-alert").alert()
		$("#warning-alert").fadeTo(2000, 500).slideUp(500, function(){
    		$("#warning-alert").slideUp(500)
		})
	}
}

$(document).ready(function(){
	$("#warning-alert").hide()
})

$("#login-btn").click(function(){
	loginf()
})

$("#login-username").add("#login-password").keypress(function(event){
	if(event.which == 13){
		loginf()
	}
})