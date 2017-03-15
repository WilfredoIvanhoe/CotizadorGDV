var users = [{user: "admin", pass: "admin"}, {user: "user1", pass:"pass"}, {user: "1", pass:"1"}];

$("#login-btn").click(function(){
	var username = $("#login-username").val();
	var password = $("#login-password").val();

	$.each(users, function(index, value){
		if(value.user == username && value.password == password){
			window.location.replace("./main.html");
		}
	});
});