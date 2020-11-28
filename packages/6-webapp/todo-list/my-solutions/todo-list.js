// Add check when click on item and cross it out
var ul = document.querySelector('ul')
ul.addEventListener(
  'click',
  e => {
    e.target.tagName === 'LI' && e.target.id !== 'empty_todo'
      ? e.target.classList.toggle('checked')
      : null
  },
  false
)

// Create a new item when click on add btn
function addItem() {
  // There are not tasks
  var empty_list = document.getElementById('empty_todo')
  empty_list.style.display = 'none'

  var li = document.createElement('li')
  var input_value = document.getElementById('input_todo').value
  var task = document.createTextNode(input_value)
  li.appendChild(task)
  if (input_value === '') {
    alert('Añada una tarea')
  } else {
    document.getElementById('my_list').appendChild(li)
  }
  document.getElementById('input_todo').value = ''

  var span = document.createElement('span')
  // \u00D7 = code icon close
  var text = document.createTextNode('\u00D7')
  span.className = 'close'
  span.appendChild(text)
  li.appendChild(span)

  // Click close button to delte a item
  var close = document.getElementsByClassName('close')
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      console.log('click close btn')
      var div = this.parentElement
      div.style.display = 'none'
    }
  }
}
