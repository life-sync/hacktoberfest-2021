// Initialize Some Variables
const deg = 6;
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

// Analog Event Handler
setInterval(() => {
    let time = new Date();
    let hh = time.getHours() * 30;
    let mm = time.getMinutes() * deg;
    let ss = time.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});


// Digital Event Handler
setInterval(() => {
    let hours = document.querySelector('.hours');  
    let minutes = document.querySelector('.minutes');  
    let ampm = document.querySelector('.ampm');  

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let am = 'am';

    m = (m < 10) ? '0' + m : m;

    if(h >= 12) {
        h = ((h - 12) == 0) ? 12 : (h - 12);
        am = 'pm'
        
    } else {
        h = h;
        am = 'am'
    }

    hours.innerHTML = h + ':';
    minutes.innerHTML = m;
    ampm.innerHTML = am;
});