// 3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums.html). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas.
//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda.
const albumsWrapper = document.querySelector('.albums-wrapper')

const albumDiv = document.createElement('div')
albumDiv.classList.add('album-div')

const albumList = document.createElement('ul')
const albumTitle = document.createElement('h2')
albumTitle.textContent = 'Album: '



async function init(){
const albumsFunction = await albums()

albumsFunction.forEach(album=>{
const listItem = document.createElement('li')
const linkItem = document.createElement('a')
linkItem.textContent = `(${album.user.name}) ${album.id}. ${album.title} (${album.photos.length} photos) `


album.photos.forEach(photo=>{
console.log(photo.url)
const linkImage = document.createElement('img')
linkImage.src = ('')
linkItem.append(linkImage)
})


listItem.append(linkItem)
albumList.append(listItem)
})


albumDiv.append(albumTitle, albumList)
albumsWrapper.append(albumDiv)
}








init()





async function albums(){
  const res = await fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_limit=25&_embed=photos')
  const albums = res.json()
  return albums
}

async function photo(){
  const res = await fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_limit=25&_embed=photos')
  const albums = res.json()
  return albums
}
