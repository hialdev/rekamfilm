//Header
$(function () {
    var header = $("header");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 185) {
            header.css('position','sticky');
            header.css('background-color','var(--blue)')
        } else {
            header.css('position','absolute');
            header.css('background-color','transparent')
        }
    });
});
//menu toggle
$('.menu-toggle input').click(function(){
    $('.header ul').toggleClass('slide-menu');
});
//Hero
// LightBox Video Trailer
$("#trailer").click(function() { 
    $('.lightbox').each(function(i) {
         var dsp = $(this).css('display');
         if (dsp == 'none') {
            $(this).css ({'display':'flex'});
        }
    });
});
$(".close").click(function(){
    $('.lightbox').css('display','none');
});

var trailer = $('.videobox');
trailer.owlCarousel({
    margin:10,
    dots:true,
    loop:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//Subscribe
$("#subscribe").click(function() { 
    $('.subbox').each(function(i) {
         var dsp = $(this).css('display');
         if (dsp == 'none') {
            $(this).css ({'display':'flex'});
        }
    });
});
$(".sub-close").click(function(){
    $('.subbox').css('display','none');
});

//Upcoming Work
var nextwork = $('.cover-nextwork');
nextwork.owlCarousel({
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

//Previous Work
var prevwork = $('.prevwork-slide');
prevwork.owlCarousel({
    loop:true,
    margin:10,
    autoWidth:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

prevwork.owlCarousel();
// Go to the next item
$('.nextBtn').click(function() {
    prevwork.trigger('next.owl.carousel');
})

//News Slider
var news = $('.news-box');
news.owlCarousel({
    margin:15,
    dots:false,
    loop:true,
    autoWidth:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

//Community
var com = $('.com-slide');
com.owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

//--------------------- Our work Page
//Upcoming Work
var ourwork = $('.nextwork-page');
ourwork.owlCarousel({
    margin:10,
    nav:true,
    loop:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

//------ Work Detail
var trailerr = $('.trailer-item');
trailerr.owlCarousel({
    margin:10,
    autoWidth:false,
    loop:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
//------ end Work Detail
//--------------------- end Our Work

//--------------------- Community Page
//com-toggle for show explain

var ctgl = $('.com-toggle');
var cbtn = $('.btn-tgl');
var i = 3;

ctgl.each(function (i){
    if (i <= ctgl.length){
        i++;
        $('.btn-tgl'+i).click(function(){
            $('.com-exp'+i).toggle();
            $('.btn-tgl'+i).toggleClass('com-active');
        });
    }else{
        return false;
    }
});
//--------------------- end Community Page


//--------------------- News Page

//--------------------- end News page