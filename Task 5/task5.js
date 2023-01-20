function insert_Row()
{
var a=document.getElementById('sampleTable').insertRow(0);
var b = a.insertCell(0);
var c = a.insertCell(1);
b.innerHTML="New Cell 1!";
c.innerHTML="New Cell 2!";
}