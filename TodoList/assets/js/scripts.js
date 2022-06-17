var toDoList = 1;

const btnAdd = document.getElementById('btnAdd');
const forms = document.getElementById('Forms');
const box = document.getElementById('box');
const lista = document.getElementById('flist.value')

btnAdd.addEventListener('click', function(){
    createInput();
    createLabel();
    toDoList++;
});


function createLabel(){
    let element = document.createElement('label');
    element.setAttribute('for', 'name_'+toDoList);
    element.textContent = 'Paulo';
    box.appendChild(element);

}
function createInput(){
    let element = document.createElement('input');
    element.setAttribute('type', 'checkbox');
    element.setAttribute('name', 'name1');
    element.setAttribute('id', 'box');

    box.appendChild(element);
}