$(function () {
  $(".accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    icons: {
      header: "ui-icon-triangle-1-e",
      activeHeader: "ui-icon-triangle-1-s",
    },
  });
  $("#autocomplete").autocomplete({
    source: [
      "The Fool",
      "The Magician",
      "The High Priestess",
      "The Empress",
      "The Emperor",
      "The Hierophant",
      "The Lovers",
      "The Chariot",
      "Strength",
      "The Hermit",
      "Wheel of Fortune",
      "Justice",
      "The Hanged Man",
      "Death",
      "Temperance",
      "The Devil",
      "The Tower",
      "The Star",
      "The Moon",
      "Judgement",
      "The World",
    ],
  });
  $("#datepicker").datepicker();
  $("#slider").slider({
    change: function (event, ui) {
      $("#sliderValue").html(ui.value);
    },
  });
});
