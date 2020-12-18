const promise = fetch('https://jsonplaceholder.typicode.com/posts')
promise
  .then(response => response.json())
  .then(result => {
    result.forEach(element => {
      //console.log(element)
      const ul = document.getElementById('list_titles') // document.querySelector('#list_titles')
      const li = document.createElement('li')
      li.innerText = element['title']
      ul.appendChild(li)
    })
  })

const createPost = document.querySelector('#create_post')
createPost.addEventListener('click', () => {
  const post = {
    title: 'Title',
    id: 1,
    body: 'Body'
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post, null, 2)
  })
})
