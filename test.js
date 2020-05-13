var database=[{username:"Sarwar",password:"123"}];
var newsfeed=[
               {username:"Virat",timeline:"Today,I made a century"},
               {username:"Dhoni",timeline:"I didn'y played well"},
               {username:"Rohit",timeline:"I got duckout Today"}
             ];
entered_username=prompt("Enter Your Username ?");
entered_password=prompt("Enter Your Password ?");
function signIn(user,pass)
{
	if(user===database[0].username&&pass===database[0].password)
	{
		alert("Signed In...Check Console for the Newsfeed !!");
		console.log(newsfeed);
    }
	else{
		alert("You Entered Wrong Username and Password !!");
	}
}
signIn(entered_username,entered_password);