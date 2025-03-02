document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskList = document.getElementById("task-list");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const title = document.getElementById("task-title").value;
      const description = document.getElementById("task-description").value;
      const priority = document.querySelector('input[name="priority"]:checked');

      if (!title) throw new Error("Bu alan zorunludur.");
      if (!priority) throw new Error("En az bir seçeneği işaretlemelisiniz.");

      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
                <div class="task-header">
                    <span class="task-title">${title}</span>
                    <span class="task-priority">${priority.value}</span>
                </div>
                <div class="task-description">${description}</div>
                <div class="task-buttons">
                    <button class="complete-btn">+</button>
                    <button class="delete-btn">×</button>
                </div>
            `;
      taskList.appendChild(taskItem);

      taskForm.reset();
    } catch (error) {
      alert(error.message);
    }
  });

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-btn")) {
      const taskItem = e.target.closest("li");
      taskItem.classList.toggle("completed");
      if (taskItem.classList.contains("completed")) {
        taskItem.style.backgroundColor = "#28a745";
      } else {
        taskItem.style.backgroundColor = "#ffffff";
      }
    } else if (e.target.classList.contains("delete-btn")) {
      e.target.closest("li").remove();
    }
    e.stopPropagation();
  });
});
