// BOOK SUBMIT //
const form = document.querySelector('form').addEventListener('submit', addBook)

function addBook(event){
  event.preventDefault()
  const formValues = new FormData(event.target)
  const bookData = Object.fromEntries(formValues.entries())
  console.log({bookData})
}

// BOOK SEARCH AREA //
document.getElementById('dropdown-menu').addEventListener('click', searchTerm)

function searchTerm(item){
  document.getElementById('navbarDropdown').innerText = item.target.innerHTML
}