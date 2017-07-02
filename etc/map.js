$(document).ready(function() {
  var mouseLeaveTimer = 0;
  
  function changeMenu(continent, click) {
    if($("ul.continent").length > 0) {
      $("ul.continent").slideUp("fast", function() {
        showMenu(continent, click);
      });
    } else {
      showMenu(continent, click);
    }
  }
  
  function showMenu(continent, click) {
    var map = $("#map"),
      leftVal = click.pageX - $(map).offset().left,
      topVal = click.pageY - $(map).offset().top,
      menu = $("<ul class='continent'></ul>").append($("#"+continent).clone());
    $(menu).css({
      position:"absolute",
      left:leftVal,
      top:topVal
    }).hide();
    $(map).empty().append(menu);
    
    var menuRight = leftVal + $(menu).outerWidth(),
      mapRight = $(map).width(),
      menuBottom = topVal + $(menu).outerHeight(),
      mapBottom = $(map).height();
      
    if(menuRight > mapRight) {
      $(menu).css({left: (mapRight - $(menu).outerWidth())});
    }
    
    if(menuBottom > mapBottom) { 
      $(menu).css({top: (mapBottom - $(menu).outerHeight())});      
    }
    
    $(menu).slideDown("fast");
  }
  
  if($("#map").length > 0) {
    $("#map").mousemove(function(e) {
      clearTimeout(mouseLeaveTimer);
      
      var offset = $(this).offset(),
        x =  e.pageX - offset.left,
        y = e.pageY - offset.top;
            
      if(x > 3 && x < 220 && y > 5 && y < 150) {
        // north ameria
        $(this).css({backgroundPosition:"0 -909px", cursor:"pointer"}).unbind("click").click(function(click) {
          changeMenu("northamerica", click);
        });
      } else if(x > 240 && x < 356 && y > 14 && y < 100) {
        // europe
        $(this).css({backgroundPosition:"0 -303px", cursor:"pointer"}).unbind("click").click(function(click) {
          changeMenu("europe", click);
        });
      } else if(x > 327 && x < 554 && y > 12 && y < 195) {
        // asia
        $(this).css({backgroundPosition:"0 -606px", cursor:"pointer"}).unbind("click").click(function(click) {
          changeMenu("asia", click);
        });
      } else if(x > 92 && x < 190 && y > 155 && y < 300) {
        // south america
        $(this).css({backgroundPosition:"0 -1212px", cursor:"pointer"}).unbind("click").click(function(click) {
          changeMenu("southamerica", click);
        });
      }else if(x > 222 && x < 370 && y > 100 && y < 255) {
        // africa
        $(this).css({backgroundPosition:"0 -1515px", cursor:"pointer"}).unbind("click").click(function(click) {
          changeMenu("africa", click);
        });
      } else if (x > 485 && x < 599 && y > 180 && y < 290) {
        // australia
        $(this).css({backgroundPosition:"0 -1818px", cursor:"pointer"}).unbind("click").click(function(click) {
          changeMenu("australia", click);
        });
      } else {
        $(this).css({backgroundPosition:"0 0", cursor:"auto"}).unbind("click").click(function(click) {
          $("#map").children().slideUp("fast", function() {
            $("#map").empty();
          });
        });    
      }
    });

    $("#map").mouseleave(function(e) {
      mouseLeaveTimer = setTimeout(function() {
        $("#map").children().slideUp("fast", function() {
          $("#map").empty();
        });
      },2000);
    });
  }
});