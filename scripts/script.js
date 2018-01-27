$(document).ready(function(){

    $('.header__hamburger').click(function(){
        
        if($('.header__nav').height()<10){
            $('.header__nav').css('height', '70px');
            setTimeout(function(){
                $('.header__li--second').css({"margin-top":"25px", "opacity":"1"});
            }, 300);
            setTimeout(function(){
                $('.header__li--first').css({"margin-top":"25px", "opacity":"1"});
            }, 500);
            setTimeout(function(){
                $('.header__li--third').css({"margin-top":"25px", "opacity":"1"});
            }, 700);
        }else{
            $('.header__li--second').css({"margin-top":"45px", "opacity":"0"});
            setTimeout(function(){
                $('.header__li--first').css({"margin-top":"45px", "opacity":"0"});
            }, 300);
            setTimeout(function(){
                $('.header__li--third').css({"margin-top":"45px", "opacity":"0"});
            }, 500);
            setTimeout(function(){
                $('.header__nav').css('height', '8px');
            }, 700);
        };
    });

    $('.header__slider').slick({
        prevArrow: '<img class = "header__prevButton" src = "./img/rightArrow.png">',
        nextArrow: '<img class = "header__nextButton" src = "./img/rightArrow.png">',
        autoplay: true,
        autoplaySpeed: 3000,
      });
    

});