// NAVEGANDO PELOS ELEMENTOS

// parentNode | parentElement - permite navegar pelos elementos pais

//const body = document.querySelector('body')
//console.log(body.parentNode)
//console.log(body.parentElement)

//const element = document.querySelector('h1')
//console.log(element.parentNode)
//console.log(element.parentElement)

// ---------------------------------------------------------------------------------------------------

// childNodes | children - permite navegar pelos elementos filhos

//const el = document.querySelector('body')
//console.log(el.childNodes) // os espaços são interpretados como text, pois leva em conta os espaços vazios
//console.log(el.children) // elimina automaticamente os espaços e retorna em formato de HTMLCollection

// firstChild | firstElementChild
//console.log(el.firstChild) // leva em conta o espaço vazio
//console.log(el.firstElementChild) // não considera o espaço vazio

// lastChild | lastElementChild
//console.log(el.lastChild)  // leva em conta o espaço vazio
//console.log(el.lastElementChild) // não considera o espaço vazio

// ---------------------------------------------------------------------------------------------------

// nextSibling | nextElementSibling - permite navegar pelos elementos irmãos
//const el = document.querySelector('head')
//console.log(el.nextSibling) // leva em consideração o espaço vazio
//console.log(el.nextElementSibling) // não leva em consideração o espaço vazio

// previousSibling | previousElementSibling
//const el = document.querySelector('body script')
//console.log(el.previousSibling) // leva em consideração o espaço vazio
//console.log(el.previousElementSibling) // não leva em consideração o espaço vazio