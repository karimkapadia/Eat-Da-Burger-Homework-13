// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    console.log("[button clicked]")
    
    

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      
    }).then(
      function() {
        console.log("changed eat to", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger ={name: $("#ca").val().trim()}
  
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
