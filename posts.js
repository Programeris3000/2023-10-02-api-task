// 2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//   2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
//   2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
//   2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.

async function init (){
const allPosts = await posts()
console.log(allPosts)
const postsWrapper = document.querySelector('.posts-wrapper')

const postDiv = document.createElement('div')
postDiv.classList.add('post-item')

const postsList = document.createElement('ul')
const postTitle = document.createElement('h2')
postTitle.classList.add('post-title')
postTitle.textContent = 'Posts: '

allPosts.forEach(post => {
  const postItem = document.createElement('li')
  const postLink = document.createElement('a')
  postLink.textContent = `${post.id}. ${post.title} (${post.comments.length} comments)`
  postLink.href = './post.html'

  const test = document.createElement('a')
  test.textContent = `(${post.user.name}) `
  test.href = './user.html'
  postItem.prepend(test)


  postsList.append(postItem)
  postItem.append(postLink)
})

postDiv.append(postTitle, postsList)
postsWrapper.append(postDiv)
}
















init ()

async function posts(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=25&_expand=user&_embed=comments')
  const posts = await res.json()
  return posts
}