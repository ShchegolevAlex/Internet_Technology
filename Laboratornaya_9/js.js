

var caution = false;


function setCookieCounter(name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
  if (!caution || (name + "=" + escape(value)).length <= 4000)
    document.cookie = curCookie;
  else
    if (confirm("Cookie exceeds 4KB and will be cut!"))
      document.cookie = curCookie;
}

function getCookieCounter(name) {
  var prefix = name + "=";
  var cookieStartIndex = document.cookie.indexOf(prefix);
  if (cookieStartIndex == -1)
    return null;
  var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
  if (cookieEndIndex == -1)
    cookieEndIndex = document.cookie.length;
  return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function deleteCookieCounter(name, path, domain) {
  if (getCookieCounter(name)) {
    document.cookie = name + "=" + 
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0);
    date.setTime(date.getTime() - skew);
}

var now = new Date();
fixDate(now);
now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
var visits = getCookieCounter("counter");
if (!visits)
  visits = 1;
else
  visits = parseInt(visits) + 1;
setCookieCounter("counter", visits, now);
// document.write("<h3>Привет, " + name_user.value + "</h3>")

document.write("<h3>Количество посещений этой страницы " + visits + "</h3>")


function setCookie(){
var date = new Date();
var expireDate = new Date();
expireDate.setDate(365 + expireDate.getDate());
// var counter = document.getElementById('counter');
var date_id = document.getElementById('date_id');
var Nuser = document.getElementById('Nuser');
var name_user = document.getElementById('name_user');

document.cookie = 'Nuser=' + escape(Nuser.value) + ';max-age=' +1000*60*60*24*365 +'; path=/;';
// document.cookie = 'counter='  + escape(counter.value) + ';max-age=' + 1000*60*60*24*365 + ';path=/;';
document.cookie = 'name_user' + escape(name_user.value) + ';max-age=' + 1000*60*60*24*365 + ';path=/';
document.cookie = 'date_id=' + escape(date.toGMTString()) + ';expires=' + expireDate.toGMTString() + ';max-age=' + 1000*60*60*24*365 + ';paht=/';
}

function getCookie(par){
    var allcookies = document.cookie;
    var pos = allcookies.indexOf(par);
    var dlina = par.length;
    if(pos !== -1){
        var start = pos + dlina + 1;
        var end = allcookies.indexOf(';', start);

        if(end == -1){
            end = allcookies.length;
        }

        var znachenie = allcookies.substring(start, end);
        znachenie = unescape(znachenie);
        this.cooka = znachenie;
    }
}

function readCookie(){
    if(document.cookie !== ''){
        var Nusercooka = new getCookie('Nuser');
        var date_idcooka = new getCookie('date_id');
        var name_user = new getCookie('Nuser');
        // var countercooka = new getCookie('counter');

        var Nuser = document.getElementById('Nuser');
        var date_id = document.getElementById('date_id');
        // var counter = document.getElementById('counter');
        var name_user = document.getElementById('name_user');

        Nuser.value = Nusercooka.cooka;
        date_id.value = date_idcooka.cooka;
        // counter.value = countercooka.cooka;
        name_user.value = Nusercooka.cooka;
    }
}