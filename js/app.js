'use strict';

// login modal  popup
const loginBox = document.getElementById('login');
const banner_Text = document.getElementById('banner-text');
const loginCloseicon = document.querySelector('.close');
const loginModal = document.querySelector('.bg-modal');
const userLogin = document.getElementById('userLoginn');
const adminLogin = document.getElementById('adminLogin');
const loginAdminModal = document.getElementById('bg-adminModal');
const loginUserModal = document.getElementById('bg-userModal');
const loginCloseAdminicon = document.querySelector('.closeAdmin');

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
//open up User login
userLogin.addEventListener('click', function(){
	banner_Text.style.display = 'none';
	loginUserModal.style.display = 'flex';
	loginAdminModal.style.display = 'none';

});
//open up Admin login
adminLogin.addEventListener('click', function(){
	banner_Text.style.display = 'none';
	loginAdminModal.style.display = 'flex';
	loginModal.style.display = 'none';
});
// Closes the login Modal popup with the closeicon
loginCloseicon.addEventListener('click', function (){
	banner_Text.style.display = 'block';
	loginModal.style.display = 'none';
	loginUserModal.style.display = 'none';
});
// close Admin login Modal
loginCloseAdminicon.addEventListener('click', function (){
	
	banner_Text.style.display = 'block';
	loginAdminModal.style.display = 'none';
});

// Validate Login form
function validateLoginForm(e){
	const userName = document.getElementById('username');
	const password = document.getElementById('password');
	if(userName.value.length == 0) {
		userName.className = "error";
		errorMessage.innerHTML = 'Username can\'t be blank';
		errorAdminMessage.innerHTML = '';
	}
	else if(password.value.length < 6) {
		userName.className = "error";
		psw.textContent = '';
		passwordError.innerHTML = 'password can\'t be less than 6 letters';
		passwordAdminError.innerHTML = '';
		
	} else {
		window.location.href='staffDashboard.html'
	}
	
}

function validateAdminLoginForm() {
	const adminName = document.getElementById('adminUsername');
	const adminpassword = document.getElementById('adminPassword');
	if(adminName.value.length == 0) {
		adminName.className = "error";
		errorMessage.innerHTML = '';
		errorAdminMessage.innerHTML = 'Username can\'t be blank';
	}
	else if(adminpassword.value.length < 6) {
		adminName.className = "error";
		psw.innerHTML = '';
		passwordAdminError.innerHTML = 'password can\'t be less than 6 letters';
		
	} else {
		window.location.href='adminDashboard.html'
	}
}
