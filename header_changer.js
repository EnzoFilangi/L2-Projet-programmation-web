window.onscroll = function() {make_title_disappear()};

const header = document.querySelector("header");

function make_title_disappear() {
    console.log(window.pageYOffset);
    if(window.pageYOffset > 50)
    {
        document.getElementById("header_title").style.display = "none";
    }
    else
    {
        document.getElementById("header_title").style.display = "block";
    }
}