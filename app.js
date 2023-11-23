document.getElementById('toggleButton').addEventListener('click', function() {
    let alert = document.getElementById('alert');
    let menu = document.getElementById('menuBar');
    if (menuBar.style.display === 'none') {
        menuBar.style.display = 'block';
        alert.style.display = 'none';
    } else {
        menuBar.style.display = 'none';
    }
})

document.getElementById('alertToggle').addEventListener('click', function() {
    let alert = document.getElementById('alert');
    if (alert.style.display === 'none'){
        alert.style.display = 'block';
        menuBar.style.display = 'none';
    } else {
        alert.style.display = 'none'
    }
})

let close = document.getElementsByClassName("close_plan")
let subscribe = document.getElementById('subscribe')

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
        subscribe.style.display = 'none';
    })
}
