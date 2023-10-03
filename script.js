// 1. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user.html puslapį.
//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius
async function init(){

const allUsers = await users()

console.log(allUsers)

const wrapper = document.querySelector('.wrapper')
const postsWrapper = document.querySelector('.posts-wrapper')

const usersWrapper = document.createElement('div')
usersWrapper.classList.add('users-wrapper')

const usersWrapperTitle = document.createElement('h2')
usersWrapperTitle.textContent = `Users: `

const usersList = document.createElement('ul')

allUsers.forEach(user => {
  // console.log(user.post)
  const listItem = document.createElement('li')

  const linkItem = document.createElement('a')
  linkItem.textContent = `${user.name} (${user.posts.length} posts)`
  linkItem.href = './user.html'

  listItem.append(linkItem)
  usersList.append(listItem)
})

usersWrapper.append(usersWrapperTitle, usersList)
wrapper.append(usersWrapper)
}
init()

async function users(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
  const users = await res.json()
  return users
}




 



 

// 4. Sukurti navigacijos elementą, kuris nukreips į puslapius:
//   4.1. Home / pagrindinis puslapis.
//   4.2. Users / vartotojų puslapis.
//   4.3. Albums / albumų puslapis.
//   4.4. Posts / pranešimų puslapis.
//   4.5. Pakeisti aktyvaus puslapio nuorodos stilių.