//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $("#box").hide();
  
    $("#toggle-text").click(function() {
      $("#box").toggle();
    });
    
    $("#box").click(function() {
      $(this).animate({ width: "300px", height: "300px" }, "fast");
    });
    
    
    $("h2").click(function() {
      $("#box").css("background-color", "#abd9ff");
    });
    
    $("#reset-circle").click(function() {
        $("#box").hide().css({
          "width": "200px",
          "background-color": "#b5ffe0"
    });
    });
    
});


