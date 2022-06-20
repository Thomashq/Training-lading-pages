var toDoList = 1;

const btnAdd = document.getElementById('btnAdd');
const forms = document.getElementById('Forms');
const box = document.getElementById('box');
const lista = document.getElementById('flist.value')
const nome = document.getElementById('flist');

btnAdd.addEventListener('click', function entrada(){
    createInput();
    createLabel();
    lineBreaker();
    valueClean();
    toDoList++;

}); 

function createLabel(){
    let element = document.createElement('label');
    element.setAttribute('for', 'name_'+toDoList);
    element.textContent = flist.value;
    box.appendChild(element);

}
function createInput(){
    let element = document.createElement('input');
    element.setAttribute('type', 'checkbox');
    element.setAttribute('name', 'name_'+toDoList);
    element.setAttribute('id', 'box');

    box.appendChild(element);
}

function lineBreaker(){
    let element = document.createElement('br');
    box.appendChild(element);
}

function valueClean(){
    flist.value = "";
}
