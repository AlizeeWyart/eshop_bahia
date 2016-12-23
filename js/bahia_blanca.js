$(document).ready(function() {
  $("#big-photo").elevateZoom({
    zoomType        : "inner",
    cursor: "crosshair"
  });
  $(".product-infos-tab").on("click", function(e){
      // Change active tab
      $(".product-infos-tab").removeClass("active");
      $(this).addClass("active");
      // Hide all tab-content (use class="hidden")
      $(".product-infos-contents").addClass("hidden");
      // Show target tab-content (use class="hidden")
      tabSelector = $(this).data("target");
      $(tabSelector).removeClass("hidden");
    });
  // CHOIX DES TAILLES
  $(".round-size-choice").on("click", function(e){
      // Change active tab
      $(".round-size-choice").removeClass("active");
      $(this).addClass("active");
    });
  // CHOIX DES COULEURS
  $(".round-color-choice").on("click", function(e){
      // Change active tab
      $(".round-color-choice").removeClass("active");
      $(this).addClass("active");
    });
  $(".product-small-photo").on("click", function(e){
    var url = this.src;
    console.log(url);
    $("#big-photo").attr('src', url);
    $("#big-photo").elevateZoom({
    zoomType        : "inner",
    cursor: "crosshair"
    });
  });
  $('.collection-navbar').hover(function() {
    $('.dropdown-menu').stop(true, true).fadeIn(500);
  }, function() {
    $('.dropdown-menu').stop(true, true).fadeOut(500);
  });
  // QUANTITY IN SHOW PRODUCT
  // INCREASE +1
  $('#increase-quantity').on("click", function(e){
    var qty = $('#quantity-input').val();
    console.log(qty);
    var newQty = parseInt(qty) + 1;
    $('#quantity-input').val(newQty);
  });
  // DECREASE - 1
  $('#decrease-quantity').on("click", function(e){
    var qty = $('#quantity-input').val();
    console.log(qty);
    var newQty = parseInt(qty) - 1;
    if(newQty < 1) newQty=1;
    if(newQty >= 10) newQty=10;
    $('#quantity-input').val(newQty);
  });
});

