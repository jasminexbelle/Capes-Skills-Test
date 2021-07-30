const form = document.getElementById('form');
const username = document.getElementById('username');
const contactnum = document.getElementById('contactnum');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const contactnumValue = contactnum.value.trim();
	var valid = true 
	if(usernameValue === '') {
		setErrorFor(username, 'Error: Please check all the details before submitting.');
		valid = false
	} else {
		setSuccessFor(username);
	}	

	if(contactnumValue.length <11) {
		setErrorFor(contactnum, 'Error: Please enter a valid number.');
		valid = false
	} else {
		setSuccessFor(contactnum);
	}

	if(contactnumValue.length >11) {
		setErrorFor(contactnum, 'Error: Please enter a valid number.');
		valid = false
	} else {
		setSuccessFor(contactnum);
	}
	if(contactnumValue.length !=11) {
		setErrorFor(contactnum, 'Error: Please enter a valid number.');
		valid = false
	} else {
		setSuccessFor(contactnum);
	}

	if (valid) {
		alert("You have successfully submitted your contact details.")
	}
}

function setErrorFor(input, message) {
	const group = input.parentElement;
	const small = group.querySelector('small');
	group.className = 'group error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const group = input.parentElement;
	group.className = 'group success';
}
	

