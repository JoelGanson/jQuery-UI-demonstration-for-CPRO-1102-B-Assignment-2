$(function () {
  $(".draggable").draggable({
    revert: "invalid",
    containment: "parent",
  });
  $(".droppable").droppable();
  $(".resizable").resizable();
  $("#selectable").selectable();
});
