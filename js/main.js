$(function(){
    $('.visual .slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });
    let sw=true
    $('.btn_menu').click(function(){
        $('header').toggleClass('on')
        $('.cover').fadeToggle()
    })
    // 해당 페이지가 load 되면 위에서 내려오기 (-100px -> 0)
    $(window).on('load',function(){
        $('header').addClass('load')
        $('.visual .visual_box').addClass('on')
    })
    $(window).on('scroll',function(){
        let scrollY=$(window).scrollTop()
        // let header=$('header')
        // let visual=$('.visual')
        // let headerHi=header.outerHeight()
        // let visualHi=visual.outerHeight()
        // console.log(headerHi)
        // console.log(visualHi)
        if(scrollY<919){
            $('header').removeClass('down')
        }else{
            $('header').addClass('down')
        }
    })

    // 스크롤바 위치에 따라서 해당 요소 애니메이션

    // 제이쿼리 공통함수 정의
    $.fn.aniOn = function(){
        // 선택한 요소의 Y축 시작 좌표 값
        let elementTop = $(this).offset().top
        // 선택한 요소의 Y축 끝(높이) 좌표 값
        let elementBottom = elementTop+$(this).outerHeight()
        // 스크롤바의 위치
        let scrollTop=$(window).scrollTop();
        console.log(scrollTop)
        let scrollBottom=scrollTop+$(window).height();
        // 스크롤바에 요소가 들어왔는지 벗어났는지 결과를 return
        return (scrollTop<elementBottom)&&(elementTop<scrollBottom)
    };
    let ani=$('.ani')
    // 반복적으로 실행
    // 스크롤바 이벤트 발생
    $(window).on('scroll',function(){
        // ani class가 붙어있는 요소를 찾아서 각각 반복해라
        ani.each(function(){
            // 현재 요소가 aniOn 함수를 호출했을때
            if($(this).aniOn()){
                $(this).addClass('on')
            }else{
                $(this).removeClass('on')
            }
        })
    })
});