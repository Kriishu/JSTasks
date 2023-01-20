function getOptions()
{
var select =document.getElementById("mySelect");
var txt1 = "Number of items";
var i;
l=document.getElementById("mySelect").length;  
txt1 = txt1+l;
for (i=0;i<select.length;i++)
  {
    txt1 = txt1 + "\n" + select.options[i].text;
  }
alert(txt1);
}