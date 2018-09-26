$(document).ready(function(){
    $("a[href^=\"#\"]").click(function () {
      var toggle  = $(this).attr("href");
        var top = $(toggle).offset().top;
        $("body,html").animate({scrollTop: top }, 500);
    });
});