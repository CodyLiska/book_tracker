// BOOK SEARCH AREA //
document.getElementById('dropdown-menu').addEventListener('click', searchTerm)

function searchTerm(item){
  console.log(item.target.innerHTML)
  document.getElementById('navbarDropdown').innerText = item.target.innerHTML
}