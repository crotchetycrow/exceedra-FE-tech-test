const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const toggleForm = document.querySelector('.reg-container');


const mainContainer = document.getElementById("myData");

var form = document.querySelector('form');
var data = new FormData(form);


// Fetching API

// fetch('https://mock-members-api.herokuapp.com/members')
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.then(function (data) {
// 		appendData(data);
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});

// Functions

// Hamburger menu
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Form 'active'
function setToggle() {
  toggleForm.classList.toggle('active');
}


// Form validation for empty inputs

const memInput = document.querySelector('input');

function validateForm() {

	memInput.addEventListener('input', () => {
		memInput.setCustomValidity('');
		memInput.checkValidity();
	});
	
	memInput.addEventListener('invalid', () => {
		if(memInput.value === '') {
			memInput.setCustomValidity('Enter your username!');
		} else {
			memInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
		}
	});
}

// Serialising form data allowing it to console log

document.getElementById("reg-btn").addEventListener('submit', function (event) {


  // This prevents page change, but without it data fails to fetch
  // I think this is because there is no submit event on welcome.html
	event.preventDefault();

	fetch('https://mock-members-api.herokuapp.com/members', {
		method: 'POST',
		body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	}).then(function (response) {
		if (response.ok) {
			// window.location.assign(response.url("welcome.html"));
			return response.json();
		}
		return Promise.reject(response);
	}).then(function (data) {
		console.log(data);
	}).catch(function (error) {
		console.warn(error);
	});
});

// Appending data to HTML
function appendData(data) {
	for (var i =0; i < data.length; i++) {

		// Sort points by highest
		data.sort((a, b) => (a.points < b.points) ? 1 : -1)
		var table = document.createElement("tr");
		table.classList.add('memDetails');
		// DUE TO TIME CONSTRAINTS 
		// The image is just hardcoded in - I was trying to grab the image from the API but I need to spend more time on it
		// ${data[i].img} not working as expected
		table.innerHTML =  `<tr><td><img src="https://img.icons8.com/cotton/64/000000/doctor-skin-type-3.png"></td><td>${data[i].fname}</td> <td>${data[i].lname}</td> <td>${data[i].country}</td> <td>${data[i].points == undefined ? 0 : data[i].points}</td></tr>`;
		
		mainContainer.appendChild(table);
	}
}

// Country selector, pokemon and star wars connector
document.addEventListener('DOMContentLoaded', () => {

  const selectDrop = document.querySelector('#countries');
  // const selectDrop = document.getElementById('countries');


  fetch('https://restcountries.com/v3.1/all')
		.then(response => {
			return response.json();
		}).then(data => {
	    let output = "";
    data.forEach(country => {
      output += `<option value="${country.name.common}">${country.name.common}</option>`;
			data.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1)
    })

    selectDrop.innerHTML = output;
		}).catch(err => {
			console.log(err);
		})
});	


// Clickable sorting example

	const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

  // do the work...
  document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
      const table = th.closest('table');
      Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
          .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
          .forEach(tr => table.appendChild(tr) );
  })));
