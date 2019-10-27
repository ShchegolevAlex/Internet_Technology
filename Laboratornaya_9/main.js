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
document.cookie = 'name_user' + escape(Nuser.value) + ';max-age=' + 1000*60*60*24*365 + ';path=/';
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
        // var countercooka = new getCookie('counter');

        var Nuser = document.getElementById('Nuser');
        var date_id = document.getElementById('date_id');
        // var counter = document.getElementById('counter');
        var name_user = Nuser;

        Nuser.value = Nusercooka.cooka;
        date_id.value = date_idcooka.cooka;
        // counter.value = countercooka.cooka;
        name_user.value = Nusercooka.cooka;
    }
}
