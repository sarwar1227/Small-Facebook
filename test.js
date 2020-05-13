var database=[
               {username:"Sarwar",password:"123"},
               {username:"Virat",password:"456"},
               {username:"Dhoni",password:"789"}
             ];
var newsfeed=[
               {username:"Virat",timeline:"Today,I made a century"},
               {username:"Dhoni",timeline:"I didn'y played well"},
               {username:"Rohit",timeline:"I got duckout Today"}
             ];
entered_username=prompt("Enter Your Username ?");
entered_password=prompt("Enter Your Password ?");
function isUserValid(user,pass)
{
     for(var i=0;i<database.length;i++)
     	if(user===database[i].username&&pass===database[i].password)
     		return true;
     return false;
}
function signIn(user,pass)
{
	if(isUserValid(user,pass))	
		console.log(newsfeed);
	else
		alert("You Entered Wrong Username and Password !!");
}
signIn(entered_username,entered_password);