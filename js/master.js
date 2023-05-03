let loginForm = document.querySelector('.login-form');
let loginButton = document.getElementById('login-btn');

let navbar = document.querySelector('.navbar');
let menuButton = document.querySelector('#menu-btn');

loginButton.onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
};

menuButton.onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
};


window.onscroll = () => {
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else {
        document.querySelector('.header').classList.remove('active')
    }
}

window.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else {
        document.querySelector('.header').classList.remove('active')
    }
}
