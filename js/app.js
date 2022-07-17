$(document).ready(function(){
    // console.log('hi');

    // Start Back To Top
     $('.btn-backtops').hide();
     $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

         if(getscrolltop >= 370){
            $('.btn-backtops').fadeIn(1000);
         }else{
            $('.btn-backtops').fadeOut(1000);
         }
     })
    // End Back To TOp

    // for button
    $('.navbuttons').click(function(){
        $(this).toggleClass('crossx');
    });

    // for navbar
   $(window).scroll(function(){
     let getscrolltop = $(this).scrollTop();
    //  console.log(getscrolltop);

    if(getscrolltop >= 200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }
   });

    // Start Property

    $('.propertylists').click(function(){
        $(this).addClass('activeitems').siblings().removeClass('activeitems');
       
    
        let getattvalue = $(this).attr('data-filter');

        if(getattvalue === "all"){
            $('.filters').show("slide",500);
        }else{
             $('.filters').hide();
             $('.filters').not('.'+getattvalue).hide("slide",500);
             $('.filters').filter('.'+getattvalue).show("slide",500);
        }
    });
   
    //  for image overlay (or) lightbox2
    lightbox.option({
        showImageNumberLabel : false
      });
    
    // End Property

    // Start Adv Section
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 1100){
            $('.advimages').addClass('fromlefts');
            $('.advtexts').addClass('fromrights');
        }else{
            $('.advimages').removeClass('fromlefts');
            $('.advimages').removeClass('fromrights');
        }
    });

    // End Adv Section

    const getyear = $("#getyear");
    const getfullyear = new Date().getUTCFullYear();
    getyear.text(getfullyear);

});

