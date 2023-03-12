let menu = document.getElementById('menu-bar');
let nav = document.querySelector('.navbar');
let header = document.querySelector('.header-2')

document.querySelector('.fa-bars').addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');   
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

}

let countDate = new Date('december 31, 2022 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    
    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    CountDown();
},1000)