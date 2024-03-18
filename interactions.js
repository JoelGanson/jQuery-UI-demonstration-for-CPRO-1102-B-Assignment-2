$(function () {
  $(".draggable").draggable({
    revert: "invalid",
    containment: "parent",
  });
  $(".droppable").droppable();
  $(".resizable").resizable();
  $("#selectable").selectable();
  $(".accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    icons: {
      header: "ui-icon-triangle-1-e",
      activeHeader: "ui-icon-triangle-1-s",
    },
  });
});
