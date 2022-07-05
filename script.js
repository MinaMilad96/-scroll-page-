
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mina = document.querySelector('.mina');
let main = document.querySelector('.main');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5  + 'px';
    mountains4.style.top = value + 'px';
    river.style.top = value + 'px';
    boat.style.top = value * 1.2 + 'px';
    boat.style.left = value + 'px';
    mina.style.fontSize = value + 'px';
    if (value >= 102){
        mina.style.fontSize = 102 + 'px';
        mina.style.position = 'fixed';
        if (value >= 373){
            mina.style.display = 'none';
        }else{
            mina.style.display = 'block';
        }
    }
    if (scrollY >= 204){
        main.style.background = '#213b63';
    }else{
        main.style.background = '#000';
    }
}