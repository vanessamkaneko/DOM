// Criando e adicionando elementos - todos os exemplos foram utilizando-se da div criada no createElement

// * createElement

const element = document.createElement('div');
element.innerText = "Nova criação"

// * append - adiciona após o último filho do elemento indicado | prepend - adiciona antes do primeiro filho do elemento indicado

//const add = document.querySelector('body')
//add.append(element)
//add.prepend(element)

// insertBefore - método usado para inserir elemento entre dois outros elementos

const select = document.querySelector('body')

//const local = document.querySelector('body input') // dentro do body, será selecionado o primeiro input
const local = select.querySelector('input') // poderia também ser feito assim - o document sendo substituído pelo nome da variável que está selecionando o body, indo dentro dos parênteses apenas o elemento que eu quero que venha APÓS o novo elemento criado (ou seja, o novo elemento quero que venha ANTES do input kkkk)

select.insertBefore(element, local) // parent que eu quero (no caso o body, que está guardado na variável de nome select) seguido do insertBefore, os () receberão 2 argumentos - o primeiro é o elemento que quero inserir (no caso a div, que está guardada na variável de nome element) e o segundo é o nó de referência (ou seja, antes de qual elemento que será inserido o novo - quero adicionar antes do input - que no caso está sendo representado pela variável de nome local)

