async function getPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (!response.ok) {
    throw new Exception()
  }
  const result = await response.json()
  return result
}

function renderPost(posts) {
  const postsElement = document.querySelector('#posts')

  posts.forEach(post => {
    const li = document.createElement('li')
    li.innerText = post.title
    postsElement.appendChild(li)
  })
}

function handleErrorButton() {
  const button = document.querySelector('#error')
  button.addEventListener('click', async () => {
    try {
      const post = await getPost(404)
      alert(post.title)
    } catch (e) {
      alert('ERROR')
    }
  })
}

export async function main() {
  const posts = Promise.all([getPost(1), getPost(2), getPost(3)])
  renderPost(posts)
  handleErrorButton()
}
