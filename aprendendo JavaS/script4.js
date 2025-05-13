/* 
  type conversion(typecasting) - explicitamente EU altero um tipo de dado para outro
  vs 
  type coersion - o javascript implicitamente faz essa troca, mas tambem pode usar o type conversion

  *alteraçao de um tipo de dado para outro tipo de dado
*/

let string = "1"
console.log(Number(string))

// transformar string em numero e vice versa

////////////////////////////////////////////////////////

let word = "esquizofrenia"
console.log(word.length)
let numero = 123412312388
console.log(String(numero).length)

// ver a quantidade de caracteres ou de digitos

////////////////////////////////////////////////////////

let number = 8875.8615248675
console.log(number.toFixed(2).replace(".", ","))

// toFixed - arruma a quantidade de casas decimais
// replace - troca o ponto por virgula

////////////////////////////////////////////////////////

// transformar letras minusculas em maiusculas e vice versa

let word = "Legal esse bagui"
console.log(word.toUpperCase())

////////////////////////////////////////////////////////

let text = "Eu quero ganhar dinheiro sem trabalhar."
let myArray = text.split(" ")
let textUnderscore = myArray.join("_")
console.log(textUnderscore)

// .split - separa o texto com base no que eu escolhi
// .join - transforma o que foi separado em algo que eu escolho

////////////////////////////////////////////////////////

// conferir se um texto tem uma certa palavra (jogar no caso)

let texto = "Eu quero jogar"
console.log(texto.includes("jogar"))

// .includes - confere se tem a palavra dentro da variavel

////////////////////////////////////////////////////////

// criar array([]) com construtor

let array = new Array('Alice', 'Sofia', 'Luisa')
console.log(array)

////////////////////////////////////////////////////////

// contar elementos de um array

console.log(['Alice', 'Sofia', 'Luisa'].length)

////////////////////////////////////////////////////////

// transformar uma cadeia de caracteres(string) em elementos de um array

let word = "transform"
console.log(Array.from(word))

// .from - transforma uma string em array

////////////////////////////////////////////////////////


// Manipulando arrays
let space = ['Terra', 'Lua', 'Marte']

// * adicionar um item no fim
      space.push('Júpiter')
  // * adicionar no começo
      space.unshift('Vênus')
  // * remover do fim
      space.pop()
  // * remover do começo
      space.shift()
  // * pegar somente alguns elementos do array
       console.log(space.slice(0, 2))
  // * remover 1 ou mais itens em qualquer posição do array
      space.splice(1, 1)
  // * encontrar a posição de um elemento no array
      let index = space.indexOf('Marte')
       space.splice(index, 1)
      
console.log(space)

////////////////////////////////////////////////////////