//BookStore has been moved to data.js
// console.log(bookStore);

function formatPrice(price) {
  // return `$${price.toFixed(2)}`;
  return '$' + Number.parseFloat(price).toFixed(2);
}

function renderHeader(bookStore){
  document.querySelector('header h1').textContent = bookStore.name
}
renderHeader(bookStore)

function renderFooter(bookStore){
  document.querySelector('#store').textContent = bookStore.location
  document.querySelector('#number').textContent = bookStore.number
  document.querySelector('#address').textContent = bookStore.address
}
renderFooter(bookStore)

function renderBook(book){
  const li = document.createElement('li');
  // add class to list element
  li.className = 'list-li'
  const h3 = document.createElement('h3');
  h3.textContent = book.title
  const pAuthor = document.createElement('p')
  pAuthor.textContent = `by ${book.author}`
  const pPrice = document.createElement('p')
  pPrice.textContent = formatPrice(book.price)
  const img = document.createElement('img')
  img.src = book.imageUrl;
  img.alt = `${book.title} cover`

  //append element to the DOM (so we can see it)
  const list = document.querySelector('#book-list')
  li.append(h3, pAuthor,pPrice, img);
  list.append(li);
}

// bookStore.inventory.forEach(book => renderBook(book))
bookStore.inventory.forEach(renderBook)


function removeBook(index) {
  document.querySelectorAll('li.list-li')[index].remove()
}
