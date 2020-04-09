if (window.innerWidth > 800) {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    speed: 700,
    mousewheelControl: true,
    keyboard: true,
    // sensitivity: 3,
    // releaseOnEdges: true,
    // sensitivity: 0.01,
    // freeModeMomentum: false,
    // freeMode: true
  });
  // Логотип в header и его анимация
  const logo = document.querySelector('.header-logo')
  const post = document.querySelector('.header-item:nth-child(2)')

  mySwiper.on('change', () => {
    console.log('1')
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

// скролл слайдера 


// function debounce(f,  ms) {

//   let isCooldown = false;

//   return function () {
//     if (isCooldown) return;

//     f.apply(this, arguments);

//     isCooldown = true;

//     setTimeout(() => isCooldown = false, ms);
//   };

// }

// let next = debounce(mySwiper.slideNext, 1000)
// let deltaH = 0
// let timerId = setInterval(function () {
//   if (deltaH >= 100) {
//     deltaH = 0

//     next(100)
//   }
//   if (deltaH <= -100) {
//     deltaH = 0
//     mySwiper.slidePrev()
//   }

// }, 500);
// const elem = document.querySelector('html body')
// if (elem.addEventListener) {
//   if ('onwheel' in document) {
//     // IE9+, FF17+
//     elem.addEventListener("wheel", onWheel, false);
//   } else if ('onmousewheel' in document) {
//     // устаревший вариант события
//     elem.addEventListener("mousewheel", onWheel, false);
//   } else {
//     // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
//     elem.addEventListener("MozMousePixelScroll", onWheel, false);
//   }
// } else { // IE<9
//   elem.attachEvent("onmousewheel", onWheel);
// }

// function onWheel(e) {
//   e = e || window.event;

//   // wheelDelta не дает возможность узнать количество пикселей
//   var delta = e.deltaY || e.detail || e.wheelDelta;

//   deltaH += delta

//   // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
// }