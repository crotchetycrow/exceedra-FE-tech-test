const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const toggleForm = document.querySelector('.reg-container');

// var form = document.querySelector('form');
// var data = new FormData(form);



// Hamburger menu
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Form 'active'
function setToggle() {
  toggleForm.classList.toggle('active');
}

// Form validation for empty inputs

function validateForm() {
  var x = document.firstname.lastname.emailAddress.value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

// Serialising form data

// document.addEventListener('submit', function (event) {

// 	event.preventDefault();

// 	fetch('https://mock-members-api.herokuapp.com/members', {
// 		method: 'POST',
// 		body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8'
// 		}
// 	}).then(function (response) {
// 		if (response.ok) {
// 			return response.json();
// 		}
// 		return Promise.reject(response);
// 	}).then(function (data) {
// 		console.log(data);
// 	}).catch(function (error) {
// 		console.warn(error);
// 	});
// });
