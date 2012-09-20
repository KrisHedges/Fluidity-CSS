$(document).ready( function(){
  var squares, topsquares, headersquares;

  topbarMenu = function() {
    offsetTargetScrollForTopbar = function(){
      $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           var $target = $(this.hash);
           $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
           if ($target.length) {
             var targetOffset = $target.offset().top - 62;
             $('html,body').animate({scrollTop: targetOffset}, 150);
             return false;
           };
        };  
      });
    };

    $(".topbar h1").click( function(){
       $('html, body').animate({ scrollTop: 0 }, 150);                             
    });
    offsetTargetScrollForTopbar();
  };

  helix = function(){
    var topsquares = $(".logo-animation .stage");
    var headersquares = $("header .stage");
    var squares = "<div class='square-x'><div class='square-y'><div class='square'></div></div></div><div class='square2-x'><div class='square2-y'><div class='square2'></div></div></div>";

    createHelixes = function(){
      firesquares = function(){
        topsquares.append(squares);
        headersquares.append(squares);
      };
      stopIt = function(){
        setTimeout("clearInterval(fireInterval)", 3100);
      };
      fireAway = function(){
        fireInterval = setInterval("firesquares()", 100);
      };
      fireAway();
      stopIt();
    };
    createHelixes();
    
    moveHelixOnScroll =  function(){
      $(window).scroll(function (){
       var y = $(window).scrollTop();
       if(y < 110){
           topsquares.removeClass('shown');
        };
       if(y > 110){
           topsquares.addClass('shown');
        };
      });
    };
    moveHelixOnScroll();
  };
  
  init = function() {
    setTimeout("helix()",1500);
    topbarMenu()
  };
  init();                     
});