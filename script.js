//your code here
$(function() {
  // Make the divs draggable
  $(".draggable").draggable({
    containment: "body",
    revert: "invalid",
    cursor: "move"
  });

  // Make the divs droppable
  $(".draggable").droppable({
    drop: function(event, ui) {
      var draggableId = ui.draggable.attr("id");
      var droppableId = $(this).attr("id");
      
      // Swap background images
      var draggableBg = ui.draggable.css("background-image");
      var droppableBg = $(this).css("background-image");
      
      ui.draggable.css("background-image", droppableBg);
      $(this).css("background-image", draggableBg);
    }
  });
});
