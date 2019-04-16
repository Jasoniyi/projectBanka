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
	adminName.value = '';
	userName.value = '';
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
const userName = document.getElementById('username');
const password = document.getElementById('password');
function validateLoginForm(e){
	
	if(userName.value.length == 0) {
		userName.className = "error";
		errorMsgUser.style.color = 'red';
		errorMsgUser.innerHTML = 'email is required';
		userName.focus();
		
	}
	else if(password.value.length < 6) {
		userName.className = "error";
		errorMsgUser.style.color = 'red';
		errorMsgUser.innerHTML = 'Password is required';
		password.focus()
		
		
	} else {
		window.location.href='userDashboard.html'
	}
	
}

// Validate Login form
const adminName = document.getElementById('adminUsername');
const adminpassword = document.getElementById('adminPassword');

function validateAdminLoginForm() {
	
	const select = document.getElementById('role');
	if(adminName.value.length == 0) {
		adminName.className = "error";
		errorMsgUser.innerHTML = '';
		adminErrMsg.style.color = 'red'
		adminErrMsg.innerHTML = 'email is required';
	}
	else if(adminpassword.value.length < 6) {
		adminName.className = "error";
		errorMsgUser.innerHTML = '';
		adminErrMsg.style.color = 'red'
		adminErrMsg.innerHTML = 'password can\'t be less than 6 letters';
		
	} else if(select.value == ""){
		errorMsgUser.innerHTML = '';
		adminErrMsg.style.color = 'red'
		adminErrMsg.innerHTML = 'Please select a job role';
	} else if(select.value == "staff"){
		window.location.href='staffDashboard.html';
	}
	else {
		window.location.href='adminDashboard.html';
	}
}

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const regPassword = document.getElementById('regPassword');
const confirmPassword	= document.getElementById('confirmPassword');

function valdateRegistration() {
	

	// if(fname.value.length == 0){
	// 	fname.className = "error";
	// 	fnameError.innerHTML = "First name is required";
	// }
	// if(lname.value.length == 0){
	// 	fname.className = "error";
	// 	lnameError.innerHTML = "Last name is required";
	// }
	// if(email.value.length == 0){
	// 	email.className = "error";
	// 	emailError.innerHTML = "email is required";
	// }
	// if(regPassword.value.length == 0){
	// 	regPassword.className = "error";
	// 	regPasswordError.innerHTML = "password is required";
	// }
	// if(confirmPassword != regPassword){
	// 	confirmPassword.className = "error";
	// 	confirmPasswordError.innerHTML = "Passwords do not match";
	// } else {
	// 	window.location.href='userCreateAccountDashboard.html'
	// }

}

//Registration parameters

window.onload = function(){
	const fname = document.getElementById('fname');
	const lname = document.getElementById('lname');
	const registerBtn = document.getElementById('registerBtn');
	
	registerBtn.onclick = (e)=>{
		e.preventDefault();
		validate();
	}
}


const validate =  ()=>{
	const errMsgCont = document.querySelector('.errorMessage');
	errMsgCont.textContent='';
	console.log(errMsgCont);
	errMsgCont.style.color = 'red';


	if (fname.value===''){
		errMsgCont.textContent = 'First name is required';
		fname.focus();
		return false;
	}
	if (lname.value===''){
		errMsgCont.textContent = 'Last name is required';
		lname.focus();
		return false;
	}
	if (email.value===''){
		errMsgCont.textContent = 'Email is required';
		email.focus();
		return false;
	}
	if (regPassword.value===''){
		errMsgCont.textContent = 'Password is required';
		regPassword.focus();
		return false;
	}
	if (regPassword.value != confirmPassword.value){
		errMsgCont.textContent = 'Password do not match';
		confirmPassword.focus();
		return false;
	} else {
		window.location.href='userCreateAcctDashboard.html';
	}
}


