$(function(){
  InitHtmlInclude();
  window.onscroll = function() {scrollFunction()};

  var sections = $("div");

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

function statSwiper(){
  var swiper = new Swiper('.stat-swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,
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
  });
}

function newsSwiper(){
  var swiper = new Swiper('.news-swiper', {
    slidesPerView: 2,
    slidesPerGroup: 2,
  });
}

function scrollFunction() {
  // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //   document.getElementById("lmtLogo").style.top = "-13px";
  //   document.getElementById("lmtLogo").style.height = "100px";
  //   document.getElementById("lmtLogo").style.transition = "0.4s";
  // } else {
  //   document.getElementById("lmtLogo").style.height = "130px";
  // }

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