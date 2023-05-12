function telltime() {    
    var out = "";    
    var now = new Date();    
    out += "The current date and time are:" + "<br />";
    out += "<br />Date: " + now.getDate();    
    out += "<br />Month: " + now.getMonth();    
    out += "<br />Year: " + now.getFullYear();    
    out += "<br />Hours: " + now.getHours();    
    out += "<br />Minutes: " + now.getMinutes();    
    out += "<br />Seconds: " + now.getSeconds();    
    document.getElementById("div2").innerHTML = out; 
} 
window.onload = function() {    
    document.getElementById("btn1").onclick= function() {location.reload();}    
    telltime(); }