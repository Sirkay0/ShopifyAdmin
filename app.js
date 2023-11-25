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
        alert.style.display = 'flex';
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


let btn_up = document.getElementById("up")
let btn_down = document.getElementById("down")
let box = document.getElementById("task_div")

btn_down.addEventListener('click', function() {

    box.style.display = "flex"
    btn_up.style.display = "block"
    btn_down.style.display = "none"

})

btn_up.addEventListener('click', function() {

    box.style.display = "none"
    btn_down.style.display = "block"
    btn_up.style.display = "none"

})


// Get all elements with class 'task'
const tasks = document.querySelectorAll('.task');

// Add click event listener to each task's button
tasks.forEach(task => {
    const toggleBtn = task.querySelector('.task_box_btn');
    const taskDetails = task.querySelector('.task_details_body');

    // Add click event listener
    toggleBtn.addEventListener('click', () => {
        // Check if the clicked task_details is already open
        const isOpen = taskDetails.classList.contains('open');

        // Close all other task_details
        tasks.forEach(otherTask => {
            const otherTaskDetails = otherTask.querySelector('.task_details_body');
            otherTaskDetails.classList.remove('open');
            // Remove background color from other tasks
            otherTask.classList.remove('active');
        });

        // If the clicked task_details was already open, do not close it
        if (!isOpen) {
            // Toggle the 'open' class on the clicked taskDetails
            taskDetails.classList.toggle('open');
            // Add background color to the clicked task
            task.classList.add('active');
        }
    });
});

