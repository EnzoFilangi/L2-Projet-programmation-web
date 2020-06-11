window.onscroll = function() {make_title_disappear()};

const header = document.querySelector("header");
const default_height = header.offsetTop;

function make_title_disappear() {
    if(window.pageYOffset > default_height)
    {
        document.getElementById("header_title").style.display = "none";
    }
    else
    {
        document.getElementById("header_title").style.display = "block";
    }
}