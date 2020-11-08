var todoText = document.querySelector(".todo-text");
var todoBtn = document.querySelector(".todo-btn");
var todoList = document.querySelector(".todo-list");

todoBtn.onclick = create;
todoList.onclick = checkDelete;

function create(e) {
    e.preventDefault();
    if (todoText.value.length > 0) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");

        var newLi = document.createElement("li");
        newLi.classList.add("todo-item");
        newLi.innerHTML = todoText.value;

        newDiv.appendChild(newLi);

        var checkBtn = document.createElement("button");
        checkBtn.classList.add("check-btn");
        checkBtn.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(checkBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(deleteBtn);

        todoList.appendChild(newDiv);
        todoText.value = "";
    } else {
        alert("This field cannot be empty");
    }
}

function checkDelete(e) {
    var item = e.target;
    if (item.classList[0] === "delete-btn") {
        var parent = item.parentNode;
        parent.remove();
    } else if (item.classList[0] === "check-btn") {
        var parent = item.parentNode;
        parent.classList.toggle("check");
    }
}
