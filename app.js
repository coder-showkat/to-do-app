const form = document.querySelector('.form');
const incompleteUl = document.querySelector('.incomplete ul');
const completeUl = document.querySelector('.complete ul');
const inputField = document.querySelector('#inputField');

function addTask(task) {
    let newList = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    let label = document.createElement('label');
    label.innerText= task;
    newList.appendChild(checkbox);
    newList.appendChild(label);
    incompleteUl.appendChild(newList);
    checkbox.onchange = ()=> {addToComplete(label)};
}

function addToComplete(element) {
    let newList = document.createElement('li');
    newList.innerText = element.innerText;
    let dltBtn = document.createElement('button');
    dltBtn.innerText = 'Delete';
    dltBtn.className = 'dltBtn';
    newList.appendChild(dltBtn);
    completeUl.appendChild(newList);
    element.parentNode.remove();
    dltBtn.onclick = ()=> {dltComplete(newList)}
}

function dltComplete(element) {
    element.remove();
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask(inputField.value);
    inputField.value = '';
})

const checkboxes = incompleteUl.querySelectorAll('.checkbox');
for (let checkbox of checkboxes) {
    checkbox.onchange = ()=>{addToComplete(checkbox.parentElement.lastChild)};
}

const dltBtns = completeUl.querySelectorAll('.dltBtn');
for (let btn of dltBtns) {
    btn.onclick = ()=>{dltComplete(btn.parentNode)};
}