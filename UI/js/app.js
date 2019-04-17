'use strict';

// login modal  popup
const loginBox = document.getElementById('login');
const banner_Text = document.getElementById('banner-text');
const loginCloseicon = document.querySelector('.close');
const loginModal = document.querySelector('.bg-modal');

// register modal popup
const registerBox = document.getElementById('register');
const registerModal = document.querySelector('.bg-reg-modal');
const registerCloseicon = document.querySelector('.closeReg');
const callBtn = document.getElementById('callBtn');

// Opens up login Modal popup
loginBox.addEventListener('click', function () {
    banner_Text.style.display = 'none';
	loginModal.style.display = 'flex';
});
// Closes the login Modal popup with the closeicon
loginCloseicon.addEventListener('click', function (){
	banner_Text.style.display = 'block';
	loginModal.style.display = 'none';
});

// Opens up Register Modal popup
registerBox.addEventListener('click', function () {
    banner_Text.style.display = 'none';
	registerModal.style.display = 'block';
});
// Closes the Register Modal popup with the Register close icon
registerCloseicon.addEventListener('click', function (){
	banner_Text.style.display = 'block';
	registerModal.style.display = 'none';
});

callBtn.addEventListener('click', function () {
    banner_Text.style.display = 'none';
	registerModal.style.display = 'block';
});

