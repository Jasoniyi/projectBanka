// admin dashboard
const activate = document.getElementById('activate');
const activate1 = document.getElementById('activate1');
const activate2 = document.getElementById('activate2');
const activate3 = document.getElementById('activate3');

const deactivate = document.getElementById('deactivate');
const deactivate1 = document.getElementById('deactivate1');
const deactivate2 = document.getElementById('deactivate2');
const deactivate3 = document.getElementById('deactivate3');

const deleteAcct = document.getElementById('deleteAcct');
const deleteAcct1 = document.getElementById('deleteAcct1');
const deleteAcct2 = document.getElementById('deleteAcct2');
const deleteAcct3 = document.getElementById('deleteAcct3');

const view = document.getElementById('view');
const display = document.querySelector('.textheader');
const yesBtn = document.querySelector('.btnLeft');
const noBtn = document.querySelector('.btnRight');
const responce = document.getElementById('responce');

const john = document.getElementById('john');
const jane = document.getElementById('jane');

// activate an account
activate.addEventListener('click', e => {
    responce.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
	display.textContent = 'Account Activated'
})

activate1.addEventListener('click', e => {
    responce.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
	display.textContent = 'Account Activated'
})
activate2.addEventListener('click', e => {
    responce.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
	display.textContent = 'Account Activated'
})
activate3.addEventListener('click', e => {
    responce.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
	display.textContent = 'Account Activated'
})

// deactivate an account
deactivate.addEventListener('click', e => {
    responce.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
	display.textContent = 'Account Deactivated'
})
deactivate1.addEventListener('click', e => {
    responce.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
	display.textContent = 'Account Deactivated'
})
deactivate2.addEventListener('click', e => {
    responce.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
	display.textContent = 'Account Deactivated'
})
deactivate3.addEventListener('click', e => {
    responce.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
	display.textContent = 'Account Deactivated'
})


// delete an account
deleteAcct1.addEventListener('click', e => {
    responce.style.display = 'block';
    yesBtn.style.display = 'block';
    noBtn.style.display = 'block';
	display.textContent = 'Are you sure you want to delete this account'
})
deleteAcct.addEventListener('click', e => {
	responce.style.display = 'block';
	display.textContent = 'Are you sure you want to delete this account'
})
deleteAcct2.addEventListener('click', e => {
	responce.style.display = 'block';
	display.textContent = 'Are you sure you want to delete this account'
})
deleteAcct3.addEventListener('click', e => {
	responce.style.display = 'block';
	display.textContent = 'Are you sure you want to delete this account'
})

//remove responce
yesBtn.addEventListener('click', e => {
    john.style.display = 'none';
	responce.style.display = 'none';
})
noBtn.addEventListener('click', e => {
	responce.style.display = 'none';
})
