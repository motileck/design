$(document).ready(function(){
    $("#nav").on("click","a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
    });
  });

  $(document).ready(function(){
    $("#btn-contact").on("click","a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
    });
  });