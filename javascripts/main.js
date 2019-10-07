$(function(){
  InitHtmlInclude();
  window.onscroll = function() {scrollNavbar()};

  var sections = $("div");

  if(sections.hasClass("section-banner")) {
    bannerSwiper();
  }

  if(sections.hasClass("section-features")) {
    statSwiper();
  }
  
  if (sections.hasClass("section-about")) {
    aboutSwiper();
  }

  if (sections.hasClass("section-news")) {
    newsSwiper();
  }

});

//Global functions
function InitGlobalFunction(){
	$('header select.headerOptions').click(function(){
		//code goes here
	});

	$('select.category').click(function(){
		//code goes here
	});
}

function InitHtmlInclude() {
  w3.includeHTML();
}
//End Global functions

function bannerSwiper(){
  var swiper = new Swiper('.banner-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
    }
  });
}

function statSwiper(){
  var swiper = new Swiper('.stat-swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,

    breakpoints : {
      991: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      767: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      }
    }
  });
}

function aboutSwiper(){
  var swiper1 = new Swiper('.about-swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },

    breakpoints : {
      991: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },

      767: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  });
}

function newsSwiper(){
  var swiper = new Swiper('.news-swiper', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,

    breakpoints: {
      991: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },

      767: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },

      575: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  });
}

function scrollNavbar() {
  var windowScroll;

  $(window).on('scroll', function() {

    windowScroll = $(window).scrollTop();
    
    console.log(windowScroll);

    if (windowScroll > 50) {
      $('.navbar').addClass('on-scroll');
    } else {
      $('.navbar').removeClass('on-scroll');
    }
  });
}