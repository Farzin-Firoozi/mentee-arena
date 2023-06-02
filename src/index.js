function getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

function getScrollTop() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}

function generateImageSourceUrl() {
  const hash = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  return `http://api.adorable.io/avatars/250/${hash}`;
}

function getElement(item) {
  const favorites= localStorage.getItem('favorites')
  let arr = JSON.parse(favorites) ? JSON.parse(favorites) : []

  const element = document.createElement("div");
  element.className = `element-list__item`;
  const name = document.createTextNode(item.name)
  if(arr.find(user => user.id === item.id)){
    element.classList.toggle("active")
  }

  element.addEventListener("click", function(e) {
    const favorites= localStorage.getItem('favorites')
    let arr = JSON.parse(favorites) ? JSON.parse(favorites) : []
    const itemIndex = arr.findIndex(fav => fav.id === item.id)
    if(itemIndex > -1) {
      arr.splice(itemIndex, 1)
    }
    element.classList.toggle("active")
    let favoriteList = []
    if(favorites) {
      favoriteList = arr
    }
    if(itemIndex == -1) {
      favoriteList.push(item)
    }
    localStorage.setItem("favorites", JSON.stringify(favoriteList));
  })


  element.appendChild(name)
  elementList.appendChild(element);
}

// loading
function loadingEl(status) {
  if(status) {
    const loadingElement = document.createElement("div");
    loadingElement.id = `loading`;
    loadingElement.innerHTML = 'loading...'
    elementList.appendChild(loadingElement);
  } else {
    const loadingElement = document.getElementById('loading')
    loadingElement.remove()
  }
}

function loadNextBatch() {
  if(document.getElementById('search').value) {
    elementList.innerHTML = ''
  }
  loadingEl(true)
  axios({
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/',
    params: {
      page: page,
      name: document.getElementById('search').value ? document.getElementById('search').value : null
    }
  })
    .then((response) => {
      maxPage = response.data.info.pages
      response.data.results.forEach(item => {
        getElement(item)
      })
      loading = false
      loadingEl(false)
    })
    .catch((error) => {
      loading = false
      loadingEl(false)
      alert(error.response.data.error)
    });
}

function search(e) {
  console.log(e.target.value)
}

const elementList = document.querySelector(".element-list");
let loading = false
let page = 1
let maxPage = null
// Load the first batch of elements
loadNextBatch();

// Load more batches when scorlling to the end
window.onscroll = function() {
  if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
  if(!loading && page !== maxPage) {
    page++
    loadNextBatch();
  }
  loading = true
};
