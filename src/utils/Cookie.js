function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + exhours * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function handleCookie() {
    // deleteAllCookies();
    var email = getCookie("email");
    if (email === "") {
        console.log("No cookie, so render login component")
        setCookie("email", "jc_scalabre@hotmail.com", 60);
    } else {
        console.log("Cookie exists for: " + email + ". So set state to logged in and bypass firebase auth.")
    }
}

export default { handleCookie }