const firstHalf = document.querySelector('.firstHalf');
const firstHalfmodified = document.querySelector('.firstHalfmodified');
const firstHalf_selector_1 = document.querySelector('.firstHalf-selector-1');
const firstHalf_selector_2 = document.querySelector('.firstHalf-selector-2');

firstHalf_selector_1.addEventListener("click", () => {
    if(firstHalf_selector_1.classList.contains('active')){
    firstHalf.classList.toggle('active');
    firstHalfmodified.classList.toggle('active');
    firstHalf_selector_1.classList.toggle('active');
    firstHalf_selector_2.classList.toggle('active');}
})

firstHalf_selector_2.addEventListener("click", () => {
    if(!firstHalf_selector_1.classList.contains('active')){
    firstHalf.classList.toggle('active');
    firstHalfmodified.classList.toggle('active');
    firstHalf_selector_1.classList.toggle('active');
    firstHalf_selector_2.classList.toggle('active');}
})
