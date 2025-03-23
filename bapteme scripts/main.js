// 初始化变量
let slideIndex = 1;
let touchStartX = 0;
let touchEndX = 0;

// 显示初始幻灯片
showSlides(slideIndex);

// 导航函数
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// 显示幻灯片
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// 触摸事件处理
function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!touchStartX) return;
  touchEndX = event.touches[0].clientX;
  let touchDiff = touchStartX - touchEndX;
  
  // 滑动距离超过50px才切换
  if (Math.abs(touchDiff) > 50) {
    if (touchDiff > 0) {
      plusSlides(1); // 向右滑动
    } else {
      plusSlides(-1); // 向左滑动
    }
    touchStartX = 0; // 重置起始位置
  }
}

// 移动端菜单切换
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileMenuToggle && mobileNav) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
}
