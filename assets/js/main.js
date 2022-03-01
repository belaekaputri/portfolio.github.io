//untuk scroll keatas
let span=document.querySelector(".up");
window.onscroll=function(){
    this.scrollY>=1000 ? span.classList.add("show"): span.classList.remove("show");
}
span.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}


//untuk berpindah menu apabila di klik
const navlink=document.querySelectorAll(".navLink");
function linkAction(){
    navlink.forEach(n=>n.classList.remove('active'));
    this.classList.add('active');
}
navlink.forEach(n=>n.addEventListener('click',linkAction));

//untuk navbar responsive di Hp
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul')
menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});