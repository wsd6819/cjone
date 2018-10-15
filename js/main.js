//document.ready
$(function(){
    setTimeout(function(){
      $('.logo img').attr('src','img/logo_stop.png');
    },500);

    $('.gnb-nav a').click(function(e){
      e.preventDefault();
        $('.dropdown').slideDown('fast');
        $('.sub-bg').slideDown('fast');
      // var value=$('.dropdown').css('display');
      // console.log(value);
      // if(value=='block'){
      //   $('.dropdown').slideUp('slow');
      //   $('.sub-bg').slideUp('slow');
      // }else{
      //   $('.dropdown').slideDown('fast');
      //   $('.sub-bg').slideDown('fast');
      // }
    })

    $('.sub-bg').on('mouseleave',function(){
      $('.dropdown').slideUp('slow');
      $('.sub-bg').slideUp('slow');
    })



    //카드등록
    $('.container a').click(function(e){
      e.preventDefault();
      $('#one').show();
    })
    $('.close-button').click(function(){
      $('#one').hide();
    })
    $('.login').click(function(){
      $('#two').show();
    })
    $('#two > button').click(function(){
      $('.container').hide();
      $('#one').hide();
      $('#two').hide();
      $('.oneinfo').hide();
      $('#mypoint').show(500);
    })
    //검색
    $('.css-sprite-iconicon5_1').mouseenter(function(){
      $('.search_bar').show();
    })
    $('.search_bar').mouseleave(function(){
      $('.search_bar').hide();
    })



    //contents3_포인트적립
    $('.contents_3 .circle').click(function(e){
      e.preventDefault();
      $('.contents_3 .circle').removeClass('active');
      $(this).addClass('active');
      $('.contents-box').stop().slideUp('fast');
      $(this).next('.contents-box').slideDown(1000);
    })

    //contents3_쿠폰혜택안내
    $('.logo_area img').slick({
							slidesToShow: 1,
							arrows: false,
							centerMode: false,
							vertical: true,
							verticalSwiping: true,
							infinite: false,
							asNavFor: '.inner',
							focusOnSelect: true,
							centerPadding: '0'
						});
						$('.inner').slick({
							slidesToShow: 1,
							asNavFor: '.logo_area img',
							dots: true,
							arrows: false,
						});




    //슬라이드
    $('.slide_1').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('.slide_2').slick({
      arrows:true,
      autoplay:true,
      infinite: true,
      nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    });


    //.contents_5
    $('.buliding_list .buliding').click(function(e){
      $('.buliding_list .hover_img').removeClass('on');
      $('.buliding_list .hover_img a img').slideUp();
      e.preventDefault();
      var index=$('.buliding_list .buliding').index(this);
      var position=[15, 265, 525, 753];
      $('.onester').animate({
        left:position[index]
      },1000,function(){
        $('.buliding_list .buliding').eq(index).next().addClass('on');
        $('.buliding_list .buliding').eq(index).next('.hover_img').find('a img').slideDown();
      });
    })
  });
