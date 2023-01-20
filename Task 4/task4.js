function getAttributes(){
    var  a = document.getElementById("w3r").href;
    var  b = document.getElementById("w3r").hreflang;
    var  c =  document.getElementById("w3r").rel;
    var  d =  document.getElementById("w3r").target;
    document.getElementById("here").innerHTML ="Link: "+ a + " hreflang: "+ b + " rel: "+c+" target: "+d;

}