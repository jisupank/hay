// 마우스커서 이벤트
var cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress"),
    imgEl = document.querySelectorAll(".img-wrap");
    headerEl = document.querySelectorAll(".header a");
    img = document.querySelectorAll(".img-item");
    projectImg = document.querySelectorAll(".wrapper> a> img");
    console.log(projectImg);
    

function onMouseMove(e){
    // 마우스좌표 위치값 찾아옴.
    var posX = e.clientX, 
        posY = e.clientY;

    // 요소에서 애니메이션 제거
    gsap.killTweensOf(cursorBGEl);
    gsap.killTweensOf(progressEl);

    // 애니메이션 추가
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.3, ease: "sine.out"});
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.25, ease: "sine.out"});
}

// 마우스엔터하면 cursorBGEL과 progressEl에 active 클래스 추가
function onMouseEnterList() {
    // console.log("enter");
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}

// 마우스리브하면 active 클래스 제거
function onMouseLeaveList() {
    // console.log("leave");
    if(cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")){
        progressEl.classList.remove("active");
    }
}

window.addEventListener("mousemove", onMouseMove);

// 효과를 적용할 이미지 또는 텍스트 변수를 찾아와 이벤트 추가.
for(var i = 0; i < imgEl.length; i++){
    imgEl[i].addEventListener("mouseenter", onMouseEnterList);
    imgEl[i].addEventListener("mouseleave", onMouseLeaveList);
}
for(var i = 0; i < headerEl.length; i++){
    headerEl[i].addEventListener("mouseenter", onMouseEnterList);
    headerEl[i].addEventListener("mouseleave", onMouseLeaveList);
}
for(var i = 0; i < img.length; i++){
    img[i].addEventListener("mouseenter", onMouseEnterList);
    img[i].addEventListener("mouseleave", onMouseLeaveList);
}
for(var i = 0; i < projectImg.length; i++){
    projectImg[i].addEventListener("mouseenter", onMouseEnterList);
    projectImg[i].addEventListener("mouseleave", onMouseLeaveList);
}