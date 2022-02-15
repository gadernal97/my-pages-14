const slides=document.querySelectorAll('.carousel_item')
const slidesTotal=slides.length
const carousel=document.querySelector('.carousel')
const $btnNext=document.querySelector('.btnNext')
const $btnPrev=document.querySelector('.btnPrev')
let positionSlide=0
//show slides screen
const updateSlidesPosition=()=>{
  for(let slide of slides){
      slide.classList.add('carousel_item--hidden')
      slide.classList.remove('carousel_item--visibily')

  }
  slides[positionSlide].classList.add('carousel_item--visibily')
}
//function for show next slides
$btnNext.addEventListener('click',()=>{
 if(positionSlide===slidesTotal-1){
     positionSlide=0
 }else{
     positionSlide++
 }
 updateSlidesPosition()
})
//function for show previus slides
$btnPrev.addEventListener('click',()=>{
    if(positionSlide===0){
        positionSlide=slidesTotal-1
    }else{
        positionSlide--
    }
    updateSlidesPosition()
})
//auto play  slides
let i;
carousel.addEventListener('mouseleave',()=>{
  i=setInterval(()=>{
    if(positionSlide===slidesTotal-1){
        positionSlide=0
    }else{
        positionSlide++
    }
    updateSlidesPosition()
  },4000)
})
//stop autoplay
carousel.addEventListener('mouseenter',()=>{
 clearInterval(i)
})