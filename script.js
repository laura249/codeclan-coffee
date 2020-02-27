fetch('http://codeclan-coffees.herokuapp.com')
.then(response => response.json()) // NEW
.then((menu) => {
  const menuContainer = document.querySelector('#menu') //NEW
  menu.forEach((coffee) => { // MODIFIED
// MODIFIED
}) // MODIFIED
})
