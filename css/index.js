$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header>div'); 
$('footer').load('./inc.html footer>div',footer);
//스크롤 이벤트
const elCam = document.querySelector('.campain-container')
window.addEventListener('scroll',function(){ 
    if( elCam.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ) {
        elCam.classList.add('active')
    } 
})

const elPro = document.querySelector('.product-container')
window.addEventListener('scroll',function(){
    if( elPro.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ) {
        elPro.classList.add('active')
    } 
})

const elNews = document.querySelector('.news-sns')
window.addEventListener('scroll',function(){
    if( elNews.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ) {
        elNews.classList.add('active')
    } 
})


let idx = localStorage.idx ;

function footer(){
    $('.footer-right a').eq(idx).removeClass('on');
    $('.footer-right a').eq(idx).addClass('on');
    $('.footer-right a').click(function(){
        let idx = $(this).index();
        let a = idx;
        
        localStorage.idx = idx;
    })
    localStorage.clear('idx');
}
let i=0
/////////////////////////////////////////
setTimeout(()=>{

    const box = document.querySelector('.menu-box');
    console.log(box)
    box.addEventListener('click',menuToggle)
},300)

    function menuToggle(){
    const elOpen = document.querySelector(".menu-box"),
          elMenu = document.querySelector(".menu"),
          elMenuimg = document.querySelector(".menu img")

    elOpen.addEventListener("click", function () {
        elMenu.classList.add("fade");
        $(".menu-box").css("display", "none");
      }); //버거메뉴 열때
      elMenuimg.addEventListener("click", function () {
        elMenu.classList.remove("fade");
        $(".menu-box").css("display", "block");
      }); //버거메뉴 눌렀을때 열고 닫기
}






