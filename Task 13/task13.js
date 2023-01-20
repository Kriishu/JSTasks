function getSize()
{
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
document.getElementById('wh').innerHTML = "<h1>Width: " + width + "Height: " + height + "</h1>";
}