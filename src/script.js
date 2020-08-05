const city = document.querySelector('.city');

const btn = document.querySelector('.j-btn-set-cookie');

const btn_del = document.querySelector('.j-btn-del');

const btn_del_cookie = document.querySelector('.j-btn-del-cookie');

btn.addEventListener("click", setCookie);
btn_del.addEventListener("click", delField);
btn_del_cookie.addEventListener("click", delCookie);

function setCookie() {
    cookie_text = "client_city= Your city - "+city.value+"; max-age=3600";
    document.cookie = cookie_text;
    console.log("document.cookie", document.cookie);
}

function delCookie() {   
    city.value = "";
    cookie_text = "client_city = Your city - "+city.value+"; max-age=0";
    document.cookie = cookie_text;
    console.log("document.cookie", document.cookie);
}

function delField() {
    city.value = "";
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
    
function init() {
    if (getCookie("client_city") == true){
        city.value = getCookie("client_city");
    }   
    console.log("document.cookie", document.cookie);
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('Ready!');
    init();
});