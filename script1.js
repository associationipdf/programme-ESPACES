// Code pour afficher le menu déroulant au survol de "Nos projets"
$(document).ready(function() {
  $("#nos-projets").hover(function() {
    $("#projets-dropdown").slideDown();
  }, function() {
    $("#projets-dropdown").slideUp();
  });
});

// Code pour activer le carrousel d'images
$(document).ready(function() {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false
  });
});
