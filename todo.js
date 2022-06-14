// window.localStorage.setItem(arg1 , arg2 ); : // function use save todo list stays on browser
window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");

  //   stop from refreshing page
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task =document.getElementsByClassName("text");

    if (!task) {
      alert("Please add a task");
    }
    return;
  });
});
const list_el = document.querySelector("#tasks");
// create Dom noDES
const task_el = document.createElement("div");
task_el.classList.add("task");

const task_content_el = document.createElement("div");
task_content_el.classList.add("content");
task_content_el.innerText = task;

task_el.appendChild(task_content_el);
const task_input_el = document.createElement("input");
task_input_el.classList.add("text");
task_input_el.type = "text";
task_input_el.value =task;
task_input_el.setAttribute("readonly", "readonly");

task_content_el.appendChild(task_input_el);

list_el.appendChild(task_el);
