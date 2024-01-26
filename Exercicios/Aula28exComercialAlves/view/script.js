let btn = document.querySelector('#show-or-hide')
let container = document.querySelector('#produto2')

btn.addEventListener('click', function() {
    if(container.style.display ==='block') {
        container.style.display = 'none'
    }else {
        container.style.display = 'block'
    }
})