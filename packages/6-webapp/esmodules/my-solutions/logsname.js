// Asks the user to input a, b or c and loads a JavaScript file with
// that name and executes a default function which logs the name of the file
export async function loadJavaScript() {
  var value = prompt('Choose A, B o C to load a JS file').toUpperCase()
  await import('./' + value + '.js')
}
