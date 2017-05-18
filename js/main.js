$(function () {

    $("#conteiner-image").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});
$(function(){
  new WOW().init();
})
$(function(){
  $("#owl-carouse-time").owlCarousel({
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        }
    }
  }
  );
});


$(function(){
  $("#owl-carouse-testemunho").owlCarousel({
    items:1,
    dots:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,

  }
  );
});

$(function(){
           $('.counter').counterUp({
               delay: 10,
               time: 2000
           });
       });
