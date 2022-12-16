// BOOK SUBMIT //
const form = document.getElementById('input-form')
form.addEventListener('submit', addBook)

function addBook(e){
  e.preventDefault()
  const formValues = new FormData(e.target)
  const bookData = Object.fromEntries(formValues.entries())
  console.log({bookData})
  document.getElementById('input-form').reset()

  document.getElementById('dispTitle').innerText = bookData.title
  document.getElementById('dateStarted').innerText = bookData.startDate
  document.getElementById('dispDateFinished').innerText = bookData.finishDate
  document.getElementById('dispAuthor').innerText = bookData.author
  document.getElementById('dispPublisher').innerText = bookData.publisher
  document.getElementById('dispYearPublished').innerText = bookData.yearPublished
  document.getElementById('dispGenere').innerText = bookData.fictionGenere
  document.getElementById('dispLocation').innerText = bookData.fromWhere
  document.getElementById('dispMainCharacters').innerText = bookData.mainCharacters
  document.getElementById('dispReview').innerText = bookData.myThoughts
  
  //TODO 
  //  hide labels on display side until btn is clicked
}

// BOOK SEARCH AREA //
document.getElementById('dropdown-menu').addEventListener('click', searchTerm)

function searchTerm(item){
  document.getElementById('navbarDropdown').innerText = item.target.innerHTML
}