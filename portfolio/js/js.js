$(function(){var e=$(".nav__link"),t=$(window).height(),a=$(".header"),s=$(".nav").innerHeight(),o=($(".myskills__progress-bar"),$(".section-myskills")),i=($(".section-portfolio"),$(".section-services")),n=$(".button-scrollup"),r=$(".section");e.on("click",function(){$(this).addClass("nav__link--active").parent().siblings().find("a").removeClass("nav__link--active")}),a.height(t-s),$(window).on("resize",function(){a.height($(this).height()-s)}),$(window).scroll(function(){$(this).scrollTop()>=o.offset().top-70&&$(".myskills__progress-item .progress").each(function(){$(this).animate({width:$(this).data("progress")+"%"},2e3,function(){$(this).parents(".progress-box").children(".pre-progress").text($(this).data("progress")+"%").fadeIn(2e3)})})}),$(".nav__button").on("click",function(){$(".nav__nav").slideToggle(500),$(this).children().toggleClass("nav__button-icon--active")}),$("html").niceScroll({cursorwidth:"10px",cursorcolor:"#3f4848",cursorborder:".5px solid #7eabab",cursorborderradius:0,scrollspeed:300,zindex:99999999}),e.on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$("#"+$(this).data("scroll")).offset().top-70},2e3)}),$(window).on("scroll",function(){$(this).scrollTop()>=i.offset().top-70&&($(".services__heading-box").addClass("services__heading-box--active"),$(".services__box").delay(1e3).fadeIn(1e3)),$(this).scrollTop()>o.offset().top?n.is(":hidden")&&(n.fadeIn(1e3),n.on("click",function(){$("html, body").animate({scrollTop:0},1e3)})):n.fadeOut(1e3),r.each(function(){if($(window).scrollTop()>=$(this).offset().top){var e=$(this).attr("id");$(".nav__nav a").parent().siblings().find("a").removeClass("nav__link--active"),$('.nav__nav a[data-scroll="'+e+'"]').addClass("nav__link--active")}})});var c=".section-portfolio-box .active",l=".section-portfolio-image";controlNext="section-portfolio-arrow--next",controlPrev="section-portfolio-arrow--prev",sliderInner=".section-portfolio-slider-inner",$(l).hide(),$(l+".active").show(),$(".section-portfolio-control > a").on("click",function(e){e.preventDefault(),$(this).each(function(){$(this).hasClass(controlNext)?$(l).is(".active:last-child")?($(c).fadeOut(0).removeClass("active"),$(l).first().addClass("active").fadeIn()):$(c).fadeOut(0).removeClass("active").next().addClass("active").fadeIn():$(this).hasClass(controlPrev)&&($(l).is(".active:first-child")?($(c).fadeOut(0).removeClass("active"),$(l).last().addClass("active").fadeIn()):$(c).fadeOut(0).removeClass("active").prev().addClass("active").fadeIn())})});var d=!0;setInterval(function(){d&&($(l).is(".active:last-child")?($(c).fadeOut(0).removeClass("active"),$(l).first().addClass("active").fadeIn()):$(c).fadeOut(0).removeClass("active").next().addClass("active").fadeIn())},4e3),$(sliderInner).on({mouseenter:function(){d=!1},mouseleave:function(){d=!0}});var v=$("#contact-input-name"),f=$("#contact-input-submit"),u=$("#contact-input-textarea"),h=$("#contact-message-textarea"),p=$("#contact-message-name");function m(e){var t=new RegExp(/^[a-zA-Z]{3,}$/);""===v.val()?(e.preventDefault(),p.text("sorr'y must be write name")):t.test(v.val())?p.text("correct :)"):(e.preventDefault(),p.text("sorr'y must be write name at lest 3 letter")),""===u.val()?(e.preventDefault(),h.text("sorr'y must be write message")):h.text("correct :)")}v.add(u).on("keyup",m),f.on("click",m);var g=$("#about-me"),_=($(".section-about-me-heading").innerHeight()+$(".section-about-me-content").innerHeight())/10;g.height(_+"rem"),$(".year").text((new Date).getFullYear())});