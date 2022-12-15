// BOOK SUBMIT //
const form = document.getElementById('input-form')
form.addEventListener('submit', addBook)

function addBook(e){
  e.preventDefault()
  const formValues = new FormData(e.target)
  const bookData = Object.fromEntries(formValues.entries())
  console.log({bookData})
  document.getElementById('input-form').reset()
}

// BOOK SEARCH AREA //
document.getElementById('dropdown-menu').addEventListener('click', searchTerm)

function searchTerm(item){
  document.getElementById('navbarDropdown').innerText = item.target.innerHTML
}