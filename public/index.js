const mainArea = document.getElementById("mainArea");

async function getData() {
  try {
    const res = await fetch("http://localhost:9000/todos/");
    const data = await res.json();
    // console.log(data.data);
    renderTodos(data.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function deleteData(id) {
  try {
    const res = await fetch(`http://localhost:9000/todos/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getData();
    } else {
      console.error("Error deleting data");
    }
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}

async function postData(title, description) {
  try {
    const res = await fetch("http://localhost:9000/todos/", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      getData();
    } else {
      console.error("Error posting data");
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

function renderTodos(data) {
  mainArea.innerHTML = "";
  data.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    mainArea.appendChild(todoElement);
  });
}

function createTodoElement(data) {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const grandChild1 = document.createElement("span");
  grandChild1.textContent = data.title;
  grandChild1.classList.add("title");
  const grandChild2 = document.createElement("span");
  grandChild2.textContent = data.description;
  grandChild2.classList.add("description");

  const grandChild3 = document.createElement("button");
  grandChild3.textContent = "Delete";
  // console.log(data._id);
  grandChild3.addEventListener("click", () => deleteData(data._id));
  todo.appendChild(grandChild1);
  todo.appendChild(grandChild2);
  todo.appendChild(grandChild3);

  return todo;
}

document.getElementById("submitButton").addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  if (title && description) {
    postData(title, description);
  } else {
    alert("Please provide a title and description for the todo.");
  }
});

getData();
