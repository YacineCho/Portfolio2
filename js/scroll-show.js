window.addEventListener('scroll', show);

function show(){
    var elements = document.querySelectorAll('.container');

    for(var i = 0; i< elements.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = elements[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            elements[i].classList.add('active');
        }
    }
}