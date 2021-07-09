// MANIPULANDO CONTEÚDO - através do JS que resulta no HTML da página;

// * textContent - usar quando quiser manipular somente o conteúdo de texto dos elementos | retorna o text com formatações, mas sem os elementos html

//const element = document.querySelector('h1')
//element.textContent = 'Olá' 
//console.log(element.textContent)

//const element = document.querySelector('h1')
// element.textContent += ' Olá' // desta maneira haverá uma concatenação dos conteúdos de texto = aparecerá na tela Meu Blog Olá, podendo também apenas verificar pelo console.log
//console.log(element.textContent)

// --------------------------------------------------------------------

//* innerText () - Retorna somente o texto, sem formatações ou elementos html

// const element = document.querySelector('h1')
// element.innerText = 'Oii' // há a troca do texto interno do elemento HTML - no caso, o h1
// console.log(element.innerText)

// --------------------------------------------------------------------

//* innerHTML () - usar quando quiser inserir ou substituir um trecho de código HTML usando o Javascript | retorna o texto, COM formatações e COM elementos html

//const element = document.querySelector('h1')
// element.innerHTML = "Olá Devs<small>!!!</small>" // permite a adição de tags HTML diretamente, alteração a qual aparecerá também ao inspecionar a página

// --------------------------------------------------------------------

// * value - manipular valor de um input (ou de qualquer outro elemento que receba o value) | serve tanto para retornar o valor do input - com o console.log - quanto para atribuir valor ao input. No caso abaixo, como estava assim no html <input type="text" value="este aqui">, com o console irá aparecer exatamente esta linha, mas na página em si terá o "Testando" lá na caixinha de texto (caso contrário, estaria o este aqui)

// const element = document.querySelector('input')
//console.log(element)
//element.value = "Testando"

// --------------------------------------------------------------------

// * Atributos - manipular atributos dos elementos

//const header = document.querySelector('header')
//header.setAttribute('id', 'headerone') // foi atribuído um id de nome headerone ao header
//const headerId = document.querySelector('#headerone') // pegando/selecionando o id atribuído
//console.log(headerId) // verificando o id atribuído

//console.log(headerId.getAttribute('id')) // para pegar um atributo em específico, no caso o id

//header.removeAttribute('id') // removendo atributos

// --------------------------------------------------------------------

