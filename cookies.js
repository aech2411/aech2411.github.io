function createCookie(name, value, days, path, domain, secure) {    
    if (days) {        
        var date = new Date();        
        date.setTime( date.getTime() + (days*24*60*60*1000));        
        var expires = date.toGMTString();    
    }    
    else var expires = "";    
    cookieString = name + "=" + escape(value);    
    if (expires) cookieString +=   "; expires=" + expires;    
    if (path) cookieString += "; path=" + escape (path);    
    if (domain) cookieString += "; domain=" + escape (domain);    
    if (secure) cookieString += "; secure";    
    document.getElementById("debug1").innerHTML = cookieString;
    document.cookie = cookieString; 
    document.getElementById("debug2").innerHTML = getCookie(name);
} 

function getCookie(name) {  
    var nameEquals = name + "=";    
    var crumbs = document.cookie.split(';'); 
    document.getElementById("debug3").innerHTML = crumbs;
    for (var i = 0; i < crumbs.length; i++) {        
        var crumb = crumbs[i].trim();
        if (crumb.indexOf(nameEquals) == 0) {            
            return unescape(crumb.substring(nameEquals.length, crumb.length));        
        }    
    }    
    return null; 
} 

function deleteCookie(name) {    
    createCookie(name,"",-1); 
}

