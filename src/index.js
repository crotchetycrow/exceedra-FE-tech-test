const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const toggleForm = document.querySelector('reg-container');

const regBtn = document.getElementsByClassName('.register-btn');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function setToggle() {
  toggleForm.classList.toggle('active');
}

regBtn.onclick = function () {
  console.log('test')
}

// const regBtn = document.getElementsByTagName('input');
// for(let i =0; i < regBtn.length; i++) {
//   let sBtn = regBtn[i];
//   if(sBtn.type == "submit" && sBtn.value == "Register") {
//     sBtn.addEventListener('click', () => {
//       console.log('Working')
//     })
//   }
// }


