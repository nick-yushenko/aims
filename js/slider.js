var mySwiper = (window.innerWidth > 800) ? new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  speed: 1000,
  mousewheel: true,
  keyboard: true,
  sensitivity: -100,
}) : 0;

const logo = document.querySelector('.header-logo')
const post = document.querySelector('.header-item:nth-child(2)')

mySwiper.on('slideChange', () => {
  if (mySwiper.activeIndex == 0) {
    logo.style.transform = 'translateY(-100px)'
    // logo.style.display = 'none'
    post.classList.remove('post')
    post.style.marginLeft = '0'

  } else {
    // logo.style.display = 'block'

    logo.style.transform = 'translateY(0)'
    post.style.marginLeft = '70px'
    post.classList.add('post')

  }
  console.log(post)
})
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

document.querySelector('.header-logo').addEventListener('click', () => {
  mySwiper.slideTo(0)
})


if (window.innerWidth <= 800) {
  const sections = document.querySelectorAll('.section')
  // Удаление слайдера 
  document.querySelector('.swiper-container').remove()
  // Возвращение секций обратно 
  for (let i = sections.length - 1; i >= 0; i--) {
    document.querySelector('.header').after(sections[i])
  }

}