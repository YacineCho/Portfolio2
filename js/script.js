const menu = document.querySelector('.main-navigation');
const links = document.querySelector('.main-navigation__links');
const menuBtn = document.querySelector('.main-navigation__mobile-btn');
const linkMenu1 = document.getElementById('linkMenu1');
const linkMenu2 = document.getElementById('linkMenu2');
const linkMenu3 = document.getElementById('linkMenu3');

menuBtn.addEventListener('click', () => {
    if(menuBtn.classList.contains('active-menu')){
        menuBtn.classList.remove('active-menu');
        links.classList.remove('active-links');
        menu.classList.remove('active-menu');
        document.body.classList.remove("stop-scrolling");
    }else{
        menuBtn.classList.add('active-menu');
        links.classList.add('active-links');
        menu.classList.add('active-menu');
        document.body.classList.add("stop-scrolling");
    }
});

linkMenu1.addEventListener('click', () => {
    menuBtn.classList.remove('active-menu');
    links.classList.remove('active-links');
    menu.classList.remove('active-menu');
    document.body.classList.remove("stop-scrolling");
});

linkMenu2.addEventListener('click', () => {
    menuBtn.classList.remove('active-menu');
    links.classList.remove('active-links');
    menu.classList.remove('active-menu');
    document.body.classList.remove("stop-scrolling");
});

linkMenu3.addEventListener('click', () => {
    menuBtn.classList.remove('active-menu');
    links.classList.remove('active-links');
    menu.classList.remove('active-menu');
    document.body.classList.remove("stop-scrolling");
});

console.log(menu);
console.log(links);
console.log(menuBtn);