/*

------

Используется библиотека Swiper Slider v3.3.0 
Документация к данной версии: https://github.com/nolimits4web/swiper/blob/Swiper3/API.md

------


*/

if (window.innerWidth > 800) {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    mousewheelControl: true,
    keyboard: true,
  });

  // Логотип в header и его анимация
  const logo = document.querySelector('.header-logo')
  const post = document.querySelector('.header-item:nth-child(2)')

  mySwiper.on('onSlideChangeStart', () => {
    console.log(mySwiper.activeIndex)
    if (mySwiper.activeIndex == 0) {
      logo.style.transform = 'translateY(-100px)'
      setTimeout(() => {
        post.style.marginLeft = '0'
      }, 100);
    } else {
      logo.style.transform = 'translateY(0)'
      post.style.marginLeft = 'auto'
    }
  })

  document.querySelector('.header-logo').addEventListener('click', () => {
    mySwiper.slideTo(0)
  })

  // Навигация
  document.querySelectorAll('.next').forEach(item => {
    item.addEventListener('click', () => {
      mySwiper.slideNext()
    })
  });

  document.querySelectorAll('.prev').forEach(item => {
    item.addEventListener('click', () => {
      mySwiper.slidePrev()
    })
  });

} else {
  const sections = document.querySelectorAll('.section')
  // Удаление слайдера 
  document.querySelector('.swiper-container').remove()
  // Возвращение секций обратно 
  for (let i = sections.length - 1; i >= 0; i--) {
    document.querySelector('.header').after(sections[i])
  }

}