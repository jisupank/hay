$(function () {
    // 헤더 스크롤 내리면 사라지도록
    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop(); 
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $(".headerM").css("top", "-60px");
        } else {
            $(".headerM").css("top", "0px");
        }
        lastScrollTop = st;
    });

    // 이미지 가로 슬라이드
    // 이미지를 드래그하면 가로로 슬라이딩 되도록

    // 슬라이딩될 오른쪽 정렬된 img-wrap을 querySelectorAll 로 찾아옴
    var sliders = document.querySelectorAll('.right-wrap .img-wrap');

    sliders.forEach((el, idx) => {
        // console.log(el, idx);
        var isMouseDown = false;
        var startX, scrollLeft;
        // 슬라이더 변수에 마우스다운 이벤트 적용 (마우스 누른 상태)
        el.addEventListener('mousedown', (e) => {
            console.log('mousedown', idx);
            // 반복문을 사용하여 두개의 img-wrap에 모두 적용될 수 있도록 함
            for(var i = 0; i < sliders.length; i++){
                // 마우스다운되고 있음
                isMouseDown = true;
                // 마우스 다운했을시 css에서 만들어 놓은 active 클래스를 추가
                sliders[i].classList.add('active'); 
                // 드래그를 시작한 지점의 x 좌표를 변수 startX에 대입
                startX = e.pageX - sliders[i].offsetLeft;
                // 현재 얼만큼 스크롤되었는지 변수 scrollLeft에 대입
                scrollLeft = sliders[i].scrollLeft;
            }
        });
        // 슬라이더 변수에 마우스업 이벤트 적용 (마우스 땐 상태)
        el.addEventListener('mouseup', () => {
            for(var i = 0; i < sliders.length; i++){
                // 마우스다운이 지금 안되고 있음
                isMouseDown = false;
                // 슬라이더에 active 클래스를 제거
                sliders[i].classList.remove('active');
            }
        });
        // 슬라이더 변수에 마우스무브 이벤트 적용 (마우스 움직일때)
        el.addEventListener('mousemove', (e) => {
            for(var i = 0; i < sliders.length; i++){
                // 클릭되어 있지 않을 경우 함수의 실행 중지
                if (!isMouseDown) return;
                // 의도치 않은 동작 방지
                e.preventDefault();
                // 슬라이더에 대한 상대적 x 좌표이므로 슬라이더의 왼쪽 여백 제외
                var x = e.pageX - sliders[i].offsetLeft;
                // 현재 커서가 위치한 x 좌표를 계산해 드래그한 거리를 walk 변수에 대입
                // 스크롤 속도 * 2 (배수)
                var walk = (x - startX) * 2;
                // 슬라이더의 스크롤한 거리를 scrollLeft에서 walk만큼 빼주면 드래그한 거리만큼 스크롤한 거리에 추가
                sliders[i].scrollLeft = scrollLeft - walk;
            }
        });
    });

    // 슬라이딩될 왼쪽 정렬된 img-wrap을 querySelectorAll 로 찾아옴
    var slidersL = document.querySelectorAll('.left-wrap .img-wrap');

    // 위 오른쪽 슬라이딩과 동일한 코드로 작성
    slidersL.forEach((el, idx) => {
        var isMouseDown = false;
        var startX, scrollLeft;
        console.log(el, idx);
        var isMouseDown = false;
        var startX, scrollLeft;
        el.addEventListener('mousedown', (e) => {
            console.log('mousedown', idx);
            for(var i = 0; i < slidersL.length; i++){
                isMouseDown = true;
                slidersL[i].classList.add('active'); 
                // 드래그를 시작한 지점의 x 좌표를 변수 startX에 대입
                startX = e.pageX - slidersL[i].offsetLeft;
                scrollLeft = slidersL[i].scrollLeft;
            }
        });
        el.addEventListener('mouseup', () => {
            for(var i = 0; i < slidersL.length; i++){
                isMouseDown = false;
                slidersL[i].classList.remove('active');
            }
        });
        el.addEventListener('mousemove', (e) => {
            for(var i = 0; i < slidersL.length; i++){
                if (!isMouseDown) return;
                e.preventDefault();
                var x = e.pageX + slidersL[i].offsetLeft;
                var walk = (x - startX) * 2;
                slidersL[i].scrollLeft = scrollLeft - walk; 
            }
        });
    });
});


// 패럴랙스 애니메이션
$(document).ready(function() {
    // console.log($('.right-wrap').offset().top);
    $(window).scroll( function(){
        // $('.right-wrap').each( function(i){
        //     var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        //     var bottom_of_window = $(window).scrollTop() + $(window).height();
        //     if( bottom_of_window > bottom_of_element ){
        //         $(this).animate({
        //           'margin-right':'0px','opacity':'1'
        //           },1000);
        //     }
        // }); 
        // ------동일 코드------
        $('.right-wrap .wrap-tit').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            // 지금 불러온 섹션의 top 위치 > 윈도우 탑 위치
            if( bottom_of_window > bottom_of_element ){
                // 섹션이 보여짐
                $(this).animate({
                  'margin-left':'0px'
                  },1000);
            }
        }); 
        // $('.left-wrap').each( function(i){
        //     var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        //     var bottom_of_window = $(window).scrollTop() + $(window).height();
        //     if( bottom_of_window > bottom_of_element ){
        //         $(this).animate({
        //           'margin-left':'0px','opacity':'1'
        //           },1000);
        //     }
        // }); 
        $('.left-wrap .wrap-tit').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({
                  'margin-right':'0px'
                  },1000);
            }
        }); 

        // 푸터 화살표 이미지 클릭하면 맨위로 올라는 이벤트
        // console.log($( '.footer > img' ));
        $( '.footer img' ).click( function() {
            $( 'html, body' ).animate({ 
                scrollTop : 0 
            }, 500 );
            return false;
        });
    });
  });