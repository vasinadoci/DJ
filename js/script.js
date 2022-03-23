//menu-burger
$('.icon-menu').click(function (event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
})


//slider
$(document).ready(function () {
   let position = 0;
   const slidesToShow = 3;
   const slidesToScroll = 1;
   const container = $('.sliders-container');
   const track = $('.sliders__track');
   const item = $('.sliders__item')
   const btnPrev = $('.events__arrow-left');
   const btnNext = $('.events__arrow-right');

   const itemsCount = item.length;
   const itemWidth = container.width() / slidesToShow;
   const movePosition = slidesToScroll * itemWidth;

   item.each(function (index, item) {
      $(item).css({
         minWidth: itemWidth,
      });
   });



   btnPrev.click(function () {
      position += movePosition;


      setPosition();
      checkBtns();
   });

   btnNext.click(function () {
      position -= movePosition;
      setPosition();
      checkBtns();
   });


   const setPosition = () => {
      track.css({
         transform: `translateX(${position}px)`
      });
   };


   if (container.offsetWidth == 730 + "px") {
      slidesToShow = 2;
   }
   else if (container.offsetWidth == 370 + "px") {
      slidesToShow = 1;
   }
   ////////////не работает этот код
   const checkBtns = () => {
      btnNext.prop('disabled', position === 0);
      btnPrev.prop(
         'disabled',
         position <= -(itemsCount - slidesToShow) * itemWidth
      );
   };

   checkBtns();
   //не работает
})

