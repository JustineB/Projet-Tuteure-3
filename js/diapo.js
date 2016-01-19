$(document).ready(function() {


  /*Initialisation des flêches du diapo principal */
  $('.diapo-fleche').hide();

  $('.diapo-acceuil').hover(function() {
    $('.fleche-main-diapo').fadeIn("slow", function() {
      $('.fleche-main-diapo').show();
    });
  }, function() {
    $('.fleche-main-diapo').fadeOut("slow", function() {
      $('.fleche-main-diapo').hide();
    });
  });

  var tailleOverFlow = $('#overflow-diapo').width(),
    taillePost = $('#post-diapo').width(),
    tailleglobal = $('#overflow-diapo li').length * $('#overflow-diapo li').width() - 10;

  /* Init des flèches du diapo des img index*/

  if (taillePost < tailleglobal) {
    $('#post-diapo').hover(function() {
      $('.post-fleche-diapo').fadeIn("slow", function() {
        $('.post-fleche-diapo').show();
      });
    }, function() {
      $('.post-fleche-diapo').fadeOut("slow", function() {
        $('.post-fleche-diapo').hide();
      });
    });
  }



  /*Initialisation du carroussel */
  var $diapo = $("#slides"),
    $postDiapo = $("#overflow-diapo"),
    $img = $("#slides li"),
    $postImg = $("#overflow-diapo img"),
    $eltsPagination = $("#pagination a");
  i = 0,
    indexImg = $img.length - 1,
    $currentImg = $img.eq(i);
  $targetCurrent = $postImg.eq(i);
  $currentPag = $eltsPagination.eq(i);


  $currentPag.css("background-position", "0 -13px");

  $postImg.css("border", "none");
  $targetCurrent.css("border", "solid 5px #000");

  $img.css("display", "none");
  $currentImg.css("display", "block");




  /* Evenement lors des click sur les fleches*/
  $('#next').click(function() {
    $currentImg.css("display", "none");
    $postImg.css("border", "none");
    $eltsPagination.css("background-position", "0 0");

    if (i >= indexImg) {
      i = 0;
    } else {
      i++;
    }

    $currentImg = $img.eq(i);
    $targetCurrent = $postImg.eq(i);

    $currentPag = $eltsPagination.eq(i);

    $currentImg.css({
      'opacity': 0.50
    }).animate({
      'opacity': 1
    }, 500);
    $currentPag.css("background-position", "0 -13px");
    $currentImg.css("display", "block");
    $targetCurrent.css("border", "solid 5px #000");
  });

  $('#previous').click(function() {
    $currentImg.css("display", "none");
    $postImg.css("border", "none");
    $eltsPagination.css("background-position", "0 0");

    if (i == 0) {
      i = indexImg;
    } else {
      i--;
    }

    $currentImg = $img.eq(i);
    $targetCurrent = $postImg.eq(i);
    $currentPag = $eltsPagination.eq(i);

    $currentImg.css({
      'opacity': 0.50
    }).animate({
      'opacity': 1
    }, 500);
    $currentPag.css("background-position", "0 -13px");
    $currentImg.css("display", "block");
    $targetCurrent.css("border", "solid 5px #000");

  });

  /* Event click sur les fleche du diapo index*/

  $('#nextpost').click(function() {

    $('#overflow-diapo').css("transform", 'translate3d(-370px,0px,0px)');
    $('#overflow-diapo').css('-webkit-transition', 'transform 0.7s');
    $('#overflow-diapo').css('-moz-transition', 'transform 0.7s');
  })

  $('#previouspost').click(function() {
    $('#overflow-diapo').css("transform", 'translate3d(0px,0px,0px)');
    $('#overflow-diapo').css('-webkit-transition', 'transform 0.7s');
    $('#overflow-diapo').css('-moz-transition', 'transform 0.7s');
  })

  /* Evenement lorsque l'on clique sur les images*/

  $('#overflow-diapo li').click(function() {
    $currentImg.css("display", "none");
    $targetCurrent.css("border", "none");
    $eltsPagination.css("background-position", "0 0");

    $currentImg = $img.eq($(this).index());
    $targetCurrent = $postImg.eq($(this).index());
    $currentPag = $eltsPagination.eq($(this).index());

    $currentImg.css({
      'opacity': 0.80
    }).animate({
      'opacity': 1
    }, 500);
    $currentPag.css("background-position", "0 -13px");
    $currentImg.css("display", "block");
    $targetCurrent.css("border", "solid 5px #000");
  });

  $('#pagination li').click(function() {
    $currentImg.css("display", "none");
    $targetCurrent.css("border", "none");
    $eltsPagination.css("background-position", "0 0");

    $currentImg = $img.eq($(this).index());
    $targetCurrent = $postImg.eq($(this).index());
    $currentPag = $eltsPagination.eq($(this).index());

    $currentImg.css({
      'opacity': 0.80
    }).animate({
      'opacity': 1
    }, 500);
    $currentPag.css("background-position", "0 -13px");
    $currentImg.css("display", "block");
    $targetCurrent.css("border", "solid 5px #000");
  });

  /*Slide des petites images du bas*/
  position_left = 0;
  index_last_img = 5;
  nb_img_aff = 5;

  function slideDiapo() {
    if (i == 0) {
      position_left = 0;
      index_last_img = nb_img_aff;
      $('#overflow-diapo').css("transform", 'translate3d(' + position_left + 'px,0px,0px)');
      $('#overflow-diapo').css('-webkit-transition', 'transform 0.7s');
      $('#overflow-diapo').css('-mozkit-transition', 'transform 0.7s');
    } else {
      if (i >= index_last_img) {
        position_left = position_left - 88;
        $('#overflow-diapo').css("transform", 'translate3d(' + position_left + 'px,0px,0px)');
        $('#overflow-diapo').css('-webkit-transition', 'transform 0.7s');
        $('#overflow-diapo').css('-mozkit-transition', 'transform 0.7s');
        if (index_last_img < $postImg.length - 1) {
          index_last_img++;
        }
      }
    }
  }

  /* Slide Auto */
  function slideImg() {
    setTimeout(function() {
      $img.css("display", "none");
      $postImg.css("border", "none");
      $eltsPagination.css("background-position", "0 0");

      if (i >= indexImg) {
        i = 0;
      } else {
        i++;
      }
      slideDiapo();
      $targetCurrent = $postImg.eq(i);
      $currentImg = $img.eq(i);
      $currentPag = $eltsPagination.eq(i);

      $currentPag.css("background-position", "0 -13px");
      $currentImg.css({
        'opacity': 0.80
      }).animate({
        'opacity': 1
      }, 500);
      $targetCurrent.css("border", "solid 5px #000");
      $currentImg.css("display", "block");


      slideImg();
    }, 5000);
  }

  /*
   *Concerne la carte intéractive
   */

  $(function($) {
    $(".map").append('<div class="overlay">').append('<div class="tooltip"></div>');
    $('.map .tooltip').hide();

    var regions = [{
      name: "72 Sarthe",
      src: "./img/sarthe.jpg",
      slug: "sarthe"
    }, {
      name: "53 Mayenne",
      src: "./img/mayenne.jpg",
      slug: "mayenne"
    }, {
      name: "49 Maine et Loire",
      src: "./img/maineetloire.jpg",
      slug: "maine-et-loire"
    }, {
      name: "44 Loire Atlantique",
      src: "./img/loireatlantique.jpg",
      slug: "loire-atlantique"
    }, {
      name: "85 Vendée",
      src: "./img/vendee.jpg",
      slug: "vendée"
    }]

    $(document).mousemove(function(e) {
      if (window.matchMedia("(min-width:1500px)").matches) {
        $(".map .tooltip span").css({
          top: e.pageY - $('.map .tooltip').height() - 430,
          left: e.pageX - 1300
        });
        $(".map .tooltip img").css({
          top: e.pageY - $('.map .tooltip img').height() - 280,
          left: e.pageX - 1300
        });
      } else if (window.matchMedia("(min-width:1400px) and (max-width:1500px)").matches) {
        $(".map .tooltip span").css({
          top: e.pageY - $('.map .tooltip').height() - 430,
          left: e.pageX - 1000
        });
        $(".map .tooltip img").css({
          top: e.pageY - $('.map .tooltip img').height() - 280,
          left: e.pageX - 1000
        });
      } else if (window.matchMedia("(min-width:1000px) and (max-width:1400px)").matches) {
        $(".map .tooltip span").css({
          top: e.pageY - $('.map .tooltip').height() - 430,
          left: e.pageX - 1100
        });
        $(".map .tooltip img").css({
          top: e.pageY - $('.map .tooltip img').height() - 280,
          left: e.pageX - 1100
        });
      }else if (window.matchMedia("(min-width: 800px) and (max-width: 1000px)").matches) {
        $(".map .tooltip span").css({
          top: e.pageY - $('.map .tooltip').height() - 410,
          left: e.pageX - 900
        });
        $(".map .tooltip img").css({
          top: e.pageY - $('.map .tooltip img').height() - 280,
          left: e.pageX - 900
        });
      }


    });

    $('.map area').mouseover(function() {
      var index = $(this).index();
      var indexpetit = $(this).index()%5;
      var coefficient;



      if (!window.matchMedia("(min-width: 800px) and (max-width: 1000px)").matches ) {
        coefficient = -index * 333 - 333;
        $('.map .tooltip').html("<span>" + regions[index].name + "</span><img src=" + regions[index].src + " width='200' height='150'/>").stop().fadeTo(500, 1);
      } else if (window.matchMedia("(min-width: 800px) and (max-width: 1000px)").matches) {
        coefficient = -(indexpetit)* 200 - 200;
        $('.map .tooltip').html("<span>" + regions[indexpetit].name + "</span><img src=" + regions[indexpetit].src + " width='10' height='15'/>").stop().fadeTo(500, 1);
        $('.map .tooltip img').css({
          width:'120px',
          height:'120px'
        });
        $('.map .tooltip span').css({
          width:'120px'
        });
      }

      if(window.matchMedia("(max-width: 1000px)").matches){
        $('.map .tooltip img').css({
          width:'120px',
          height:'120px'
        });
        $('.map .tooltip span').css({
          width:'120px'
        });
      }
      $('.map .overlay').css({
        backgroundPosition: coefficient + "px 0px"
      });
    });

    $('.map').mouseout(function() {
      $('.map .overlay').css({
        backgroundPosition: "0px 0px"
      });
      $('.map .tooltip').stop().fadeTo(500, 0);
    });
  });


  $('.barre-recherche-loupe').click(function() {
    $('.barre-recherche-loupe').animate({
      right: '50px',
      width: '200px'
    });
    $('#barre-recherche-nav').animate({
      width: '160px',
      display: 'block'
    });
    $('#barre-recherche-nav').show().fadeIn('500');
  });

  $('.container').click(function() {
    $('.barre-recherche-loupe').animate({
      right: '0px',
      width: '100px'
    });
    $('#barre-recherche-nav').animate({
      width: '10px'
    });
    $('#barre-recherche-nav').hide().fadeOut('500');

  });
  $('nav').click(function() {
    $('.barre-recherche-loupe').animate({
      right: '0px',
      width: '100px'
    });
    $('#barre-recherche-nav').animate({
      width: '10px'
    });
    $('#barre-recherche-nav').hide().fadeOut('500');

  });




  slideImg();





  /* Diaporama principal*/
  /*$(function() {
    $('#slides').slidesjs({
      pagination: {
        active: true
      },
      navigation: {
        active: false,
      },
      play: {
        active: false,
        auto: true,
        interval: 4000,
        swap: true
      }
    });

  });*/
});
