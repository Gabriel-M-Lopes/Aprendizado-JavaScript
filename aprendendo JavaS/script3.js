
// arrow function

const say = (name) => {
  console.log(name)
}

say('Gabriel')

///////////////////////////////////////////////////////////

// callback function


function sayMyName(name) {
  console.log('antes da callback')
  name()
  console.log('depois da callback')
}

sayMyName(
  () => {
    console.log('callback')
  }
)


///////////////////////////////////////////////////////////////////////////////////

function Person(name) {
  this.name = name
}
const gabriel = new Person("Gabriel")
const mateus = new Person("Mateus")
console.log(gabriel)
console.log(mateus)