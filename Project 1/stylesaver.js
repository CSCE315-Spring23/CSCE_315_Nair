var new_style;

function toggleStyleSheet(){

    var element = document.getElementById("mainStyleSheet");
    var current_stylesheet = element.getAttribute('href');

   if(current_stylesheet == 'style.css') {
        new_style = 'alt-style.css';
        element.setAttribute("href",new_style);
    }
    else{
        new_style = 'style.css';
        element.setAttribute("href",new_style);
    }
   
    localStorage.setItem("style",new_style);
}


window.onload = function(){
    style = localStorage.getItem("style");
    var element = document.getElementById("mainStyleSheet");
    element.setAttribute("href",style);
}