$(document).ready(function () {
  $("#addTask").click(function () {
    let taskText = $("#taskInput").val();

    if (taskText === "") {
      alert("Lütfen bir görev girin!");
      return;
    }

    let newTask = $(
      "<li>" +
        "<button class='complete-btn'>✓</button> " +
        taskText +
        " <button class='delete-btn'>Sil</button></li>"
    );

    $("#taskList").append(newTask);

    $("#taskInput").val("");
  });

  $("ul").on("click", ".complete-btn", function () {
    const parentLi = $(this).parent();
    if (parentLi.css("background-color") === "rgb(163, 230, 53)") {
      parentLi.css("background-color", "#f3f4f6");
    } else {
      parentLi.css("background-color", "#a3e635");
    }
  });

  $("ul").on("click", ".delete-btn", function (event) {
    event.stopPropagation();
    $(this).parent().remove();
  });
});
