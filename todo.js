'use strict';

let banco = [

];

const criarItem=(tarefa, status) =>{
  const item = document.createElement('label');
  item.classList.add('todoItem');
  item.innerHTML = `
  <li>
  <input type="checkbox" ${status}>
  <label>${tarefa}</label>
  </li>
  `;
  document.getElementById('todoList').appendChild(item);
}
const limparTelas = () => {
  const todoList = document.getElementById('todoList');
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}
const atualizarTela = () =>{
  limparTelas();
  banco.forEach(item => criarItem(item.tarefa, item.status))
}

const inserirItem = (evento) => {
  const tecla = evento.key;
  const texto = evento.target.value;
  if (tecla === 'Enter') {
    banco.push({'tarefa':texto, 'status':''})
    atualizarTela();
    evento.target.value ='';
  }
}

const adicionarItem = (evento) => {
  var valor = document.getElementById('new-task').value
  var texto = valor;
  banco.push({'tarefa':texto, 'status':''})
  atualizarTela();

}



document.getElementById('new-task').addEventListener('keypress',inserirItem);
document.getElementById('addTask').addEventListener('click', adicionarItem);

atualizarTela();
