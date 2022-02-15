const $nav=document.querySelector('nav')
const $navIcon=document.querySelectorAll('.icon-nav')
const $toggleNav=document.querySelector('.nav-toggle')
const $hamburquer=document.querySelector('#hamburquer')
$toggleNav.addEventListener('click',()=>{
    $nav.classList.toggle('open')
    $navIcon.forEach((icon)=>{
        icon.classList.toggle('hidden')
    })
})
window.addEventListener('resize',()=>{
    if(document.body.clientWidth>1212){
        $nav.classList.remove('open')
        $navIcon.forEach(icon=>{
            icon.classList.add('hidden')
        })
        $hamburquer.classList.remove('hidden')
    }
})