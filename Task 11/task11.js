function display_random_image() 
{
     var theImages = [{
        src: "https://r2.community.samsung.com/t5/image/serverpage/image-id/1893304i74413696B76A4C96/image-size/large?v=v2&px=999",
        width: "500",
        height: "300"
    }, {
        src: "https://media.tenor.com/U8gwt2-KX0gAAAAd/funny-memes.gif",
        width: "500",
        height: "300"
    }, {
        src: "https://64.media.tumblr.com/8ffd4bcaf9f754174b05fa1eb4dfd1b8/7a96d5bf7f7f8d5e-fd/s1280x1920/63e2a3fc0a2ee5052446d0e5a0e84e6a98198cb4.jpg",
        width: "500",
        height: "300"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}