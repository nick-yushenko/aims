var mySwiper = (window.innerWidth > 800) ? new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  speed: 1000,
  mousewheel: true,
  keyboard: true,
  sensitivity: -100,
}) : 0;

document.querySelectorAll('.next').forEach(item => {
  item.addEventListener('click', () => {
    mySwiper.slideNext()
  })
});


if (window.innerWidth <= 800) {
  const sections = document.querySelectorAll('.section')
  // Удаление слайдера 
  document.querySelector('.swiper-container').remove()
  // Возвращение секций обратно 
  for (let i = sections.length - 1; i >= 0; i--) {
    document.querySelector('.header').after(sections[i])
  }

}