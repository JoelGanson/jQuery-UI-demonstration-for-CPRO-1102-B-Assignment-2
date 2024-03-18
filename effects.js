$(function () {
  $("#hideBtn").on("click", function () {
    $("#target").hide("fold", {}, 1000);
  });
  $("#showBtn").on("click", function () {
    $("#target").show("fold", {}, 1000);
  });
  $("#explodeBtn").on("click", function () {
    $("#target").toggle("explode", { pieces: 16 }, 1000);
  });
  $("#fadeOutBtn").on("click", function () {
    $("#target").fadeTo(500, 0);
  });
  $("#fadeInBtn").on("click", function () {
    $("#target").fadeTo(500, 1);
  });
  $("#colorBtn").on("click", function () {
    $(".defaultColors").switchClass("defaultColors", "alternateColors", 1000);
    $(".alternateColors").switchClass("alternateColors", "defaultColors", 1000);
  });
});
