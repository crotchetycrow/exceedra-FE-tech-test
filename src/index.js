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

	

	function appendData(data) {
		for (var i =0; i < data.length; i++) {
			data.slice().sort((a, b) => b.points - a.points);
			var table = document.createElement("tr");
			table.classList.add('memDetails');
			
			table.innerHTML =  `<tr><td>${data[i].fname}</td> <td>${data[i].lname}</td> <td>${data[i].email}</td> <td>${data[i].points}</td></tr>`;
			
			mainContainer.appendChild(table);
		}
	}

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