const firstHalf = document.querySelector('.firstHalf');
const firstHalfmodified = document.querySelector('.firstHalfmodified');
const firstHalf_selector_1 = document.querySelector('.firstHalf-selector-1');
const firstHalf_selector_2 = document.querySelector('.firstHalf-selector-2');
const accordion = document.querySelectorAll('.accordion-item-header');

const accordion_items = document.querySelector('.accordion');

const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', addNewAccordionItem);


function addNewAccordionItem(){
    const newAccordionItem = document.createElement('div');
    newAccordionItem.classList.add('accordion-item');
    
    newAccordionItem.innerHTML = `
    <div class="accordion-item-header">
        Why is this website important?
    </div>
    <div class="accordion-item-body">
        <div class="accordion-item-body-content">
            Because we want to have a legit website for Tezasia Hackathon.
        </div>
    </div>
    `;
    accordion_items.appendChild(newAccordionItem);

    const newAccordionItemHeader = newAccordionItem.querySelector('.accordion-item-header');

    newAccordionItemHeader.addEventListener('click', () => {
        newAccordionItemHeader.classList.toggle('active');
    });
}

// function removeAccordionItem(){
//     accordion_items.removeChild(accordion_items.lastChild);

// }



accordion.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
})

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
