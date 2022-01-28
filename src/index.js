const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const toggleForm = document.querySelector('.reg-container');

const mainContainer = document.getElementById("myData");

// Functions

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function setToggle() {
  toggleForm.classList.toggle('active');
}

fetch('https://mock-members-api.herokuapp.com/members')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		appendData(data);
	})
	.catch(function (err) {
		console.log(err);
	});

	data.slice().sort((a, b) => b.points - a.points);

	function appendData(data) {
		for (var i =0; i < data.length; i++) {
			
			var divName = document.createElement("div");
			divName.classList.add('memName');
			// var divEmail = document.createElement("div");
			// divEmail.classList.add('memEmail');
			// var divPoints = document.createElement("div");
			// divPoints.classList.add('memPoints');

			// divName.innerHTML =  `<ul class='memList'> <li>${data[i].fname}</li> <li>${data[i].lname}</li> <li>${data[i].email}</li> <li>${data[i].points}</li> </ul>`;

			divName.innerHTML =  `<table class='memList' border='1'> <tr><td>${data[i].fname}</td> <td>${data[i].lname}</td> <td>${data[i].email}</td> <td>${data[i].points}</td></tr> </table>`;
			
			mainContainer.appendChild(divName);
			// mainContainer.appendChild(divEmail);
			// mainContainer.appendChild(divPoints)
		}
	}

	