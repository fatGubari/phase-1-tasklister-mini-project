document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit',function(e){
    e.preventDefault()
    addToDo(e.target.new_task_description.value,e.target.new_name.value)
    form.reset()
  })

  let select = document.querySelector('select')
  select.addEventListener('click',function(e){
    changeColor(e.target.value)
  })
});

function addToDo(todo,name){
  let li = document.createElement('li')
  let p = document.createElement('p')
  let btn = document.createElement('button')

  li.textContent = todo , " "
  p.textContent = name , " "
  btn.textContent = "x"

  document.querySelector("#tasks").appendChild(li)
  li.appendChild(btn)
  li.appendChild(p)

  btn.addEventListener('click',deleteBtn)
}

function deleteBtn(e){
  e.target.parentNode.remove()
}

function changeColor(color) {
  let li = document.querySelector('li')

  if (color === 'red') {
    li.style.color = "red";
  }
  if (color === 'green') {
    li.style.color = 'green';
  }
  if (color === 'blue') {
    li.style.color = "blue";
  } 
}