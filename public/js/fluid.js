$(document).ready( function(){
  var topsquares = $('.topbar .stage');
  var headersquares = $("header .stage");
  var squares = "<div class='square-x'><div class='square-y'><div class='square'></div></div></div><div class='square2-x'><div class='square2-y'><div class='square2'></div></div></div>";
  var d = new Date();                   
  var year = d.getFullYear();
  $(".copyright").append(" &copy; " + year);
  $('a[href*=#]').click( function(){
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
       var $target = $(this.hash);
       $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
       if ($target.length) {
         var targetOffset = $target.offset().top - 62;
         $('html,body').animate({scrollTop: targetOffset}, 150);
         return false;
       };
    };
  });

  firesquares = function() {
    topsquares.append(squares);
    headersquares.append(squares);
  };

  var stopIt = function(){
    setTimeout("clearInterval(fireInterval)", 2999);
  };
  stopIt();

  fireAway = function(){
    fireInterval = setInterval("firesquares()", 100);
  };
  fireAway();
                   
  $(window).scroll( function (){
     var y = $(window).scrollTop();
     if(y < 110){
         topsquares.removeClass('shown');
      }
     if(y > 110){
         topsquares.addClass('shown');
      }
   });

  $(".topbar h1").click( function(){
     $('html, body').animate({ scrollTop: 0 }, 150);                             
  });

});