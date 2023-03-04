const list = document.querySelector("#todo-list ul");
const forms = document.forms;

function removeIt(e) {
  if (e.currentTarget.className === "read") {
    const li = e.currentTarget.parentElement;
    list.removeChild(li);
  }
}
list.addEventListener("click", removeIt);

// add todo
const addForm = forms["add-todo"];
addForm.addEventListener("submit", function(e) {

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement("li");
  const todoName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add text content
  todoName.textContent = value;
  deleteBtn.textContent = "done";

  // add classes
  todoName.classList.add("names");
  deleteBtn.classList.add("read");

  // append to DOM
  li.appendChild(todoName);
  list.appendChild(deleteBtn);
  list.appendChild(li);
});
