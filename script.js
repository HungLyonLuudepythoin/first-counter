const modal = document.querySelector('.js-dialog');
modal.showModal();
const closebutton = document.querySelector('.close-button');
closebutton.addEventListener('click', () => {
    modal.close()
})

let count  = localStorage.getItem('count') || 0;
const display = document.querySelector('.js-showNumber');
displayNumber()

function incrementCount() {
    count++;
    localStorage.setItem('count', count)
    displayNumber();
}

function decrementCount() {

    count--;
    localStorage.setItem('count', count)
    displayNumber();
}

function displayNumber() {

    display.innerHTML = count
}
function resetNumber() {
    count = 0
    displayNumber()
    localStorage.setItem('count', count)
}

