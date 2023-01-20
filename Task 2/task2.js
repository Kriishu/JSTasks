function getFormvalue()
{
var first = document.getElementById("firstName").value; 
var last = document.getElementById("lastName").value;
document.getElementById("here").innerHTML = first+ " " + last;


}