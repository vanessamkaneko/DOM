// * getElementById()

// const element = document.getElementById('blog-title') - estava no h1 - id="blog-title"
// console.log(element)

// * getElementsByClassId() - possibilita selecionar vários elementos que possuam a mesma classe

// const element = document.getElementsByClassName('one') - estava no h1 e numa tag p que foi criada no body - class="one"
// console.log(element)

// * getElementsByTagName() - dentro do parênteses vai o nome da tag - head, body, meta, h1, etc

//const element = document.getElementsByTagName('h1')
//console.log(element)

// * querySelector() - pega sempre o primeiro seletor da página, muito versátil - posso pegar tags, classes (utilizando o . antes do nome da classe), atributos (colocando o [] em volta - ex: [src]), id (utilizando o # antes do nome)

//const element = document.querySelector('meta')
//console.log(element)

// * querySelectorAll() - mesma coisa do anterior, mas agora pega todos os que possuem o seletor descrito

//const elements = document.querySelectorAll('.one')
// console.log(elements)

// * por exemplo para classes, qual a diferença de usar o getElementsByClassName ou o querySelectorAll?
// R: utilizando o querySelectorAll eu posso usar o forEach, exemplo:

// const elements = document.querySelectorAll('.one')
// elements.forEach(el => console.log(el))

// QUAL USAR?
// getElementById: retorna diretamente o elemento
// getElementByClassName: retorna um HTMLCollection, não possibilitando usar o forEach
// getElementByTagName: retorna um HTMLCollection
// querySelector: retorna diretamente o elemento
// querySelectorAll: retorna um Nodelist, possibilitando usar o forEach
