var new_style;

function toggleStyleSheet(){

    var element = document.getElementById("mainStyleSheet");
    var current_stylesheet = element.getAttribute('href');
    
   if(current_stylesheet == 'dark.css') {
        new_style = 'light.css';
        element.setAttribute("href",new_style);
    }
    else{
        new_style = 'dark.css';
        element.setAttribute("href",new_style);
    }
   
    localStorage.setItem("style",new_style);
}


window.onload = function(){

    style = localStorage.getItem("style");

    var element = document.getElementById("mainStyleSheet");

    element.setAttribute("href",style);
}


