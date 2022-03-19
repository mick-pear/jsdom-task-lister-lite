document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.querySelector("#create-task-form")
    const task = document.getElementById('tasks');

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.target.taskDescription;
        //console.log(taskDescription.value);
        let taskListItem = document.createElement("li");
        task.appendChild(taskListItem);
        taskListItem.innerHTML = `${taskDescription.value} <button>x</button>`;
    })

    task.addEventListener("click", (event) => {
        const trigger = event.target
        if (trigger.tagName === 'BUTTON') {
           trigger.parentNode.remove();
    }});
});
