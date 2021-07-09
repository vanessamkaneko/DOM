// EVENTOS - começam sempre com on

// adicionado eventos via html

//function print() {
// console.log('oie') // no h1 foi adicionado um onclick, que tinha como valor a função print () - então, ao clicar no título, a função é chamada, imprimindo o oie
//}

// ------------------------------------------------------------------------------------------------------------

// eventos de teclado

//const select = document.querySelector('input')
//select.onkeyup = function () {
//console.log('rodei')
//} // ao soltar uma tecla, será executada a função | no caso de ser onkeydown, a função é executada quando uma tecla é apertada | no onkeypress, a função é executada ao pressionar uma tecla

// ------------------------------------------------------------------------------------------------------------

// adicionando eventos via JS - primeira maneira - o primeiro argumento da função vai qual o tipo do evento e o segundo argumento vai o nome da função a ser executada - esta maneira é a mais recomendada pois todos os eventos são executados

//const element = document.querySelector('h1');
//element.addEventListener('click', print)
//element.addEventListener('mouseover', print)

//function print() {
//console.log('hello!')
//}

//element.addEventListener('click', function () {
//console.log('outro momento')
//})


// adicionando eventos via JS - segunda maneira - sempre irá executar o último evento, desconsiderando o(s) anterior(es) - cuidado!!!!!!

const element = document.querySelector('h1');
element.onclick = print
function print() {
    console.log('testando')
}

element.onclick = function () {
    console.log('segundo momento')
}

// ------------------------------------------------------------------------------------------------------------

// argumento event - possui muitas funcionalidades!

//const input = document.querySelector('input')
//input.onkeypress = function (event) {
//console.log(event.key) // mostra qual a teclada foi digitada
//}

//const input = document.querySelector('input')
//input.onkeypress = function (event) {
//console.log(event.currentTarget) // mostra qual está disparando o evento, no caso, o input
//}

const input = document.querySelector('input')
input.onkeypress = function (event) {
    console.log(event.currentTarget.value) // mostra qual o valor que está sendo colocado no alvo
}





