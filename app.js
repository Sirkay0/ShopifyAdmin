// Event listener for menu toggle button
document.getElementById('toggleButton').addEventListener('click', function() {
    const alert = document.getElementById('alert');
    const menu = document.getElementById('menuBar');
    
    if (menuBar.style.display === 'none') {
        menuBar.style.display = 'flex';
        alert.style.display = 'none';
    } else {
        menuBar.style.display = 'none';
    }
});

// Event listener for alert toggle button
document.getElementById('alertToggle').addEventListener('click', function() {
    const alert = document.getElementById('alert');
    
    if (alert.style.display === 'none'){
        alert.style.display = 'flex';
        menuBar.style.display = 'none';
    } else {
        alert.style.display = 'none';
    }
});

// Event listeners for closing the subscription box
const close = document.getElementsByClassName("close_plan")
const subscribe = document.getElementById('subscribe')

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
        subscribe.style.display = 'none';
    });
}

// Event listeners for expanding and collapsing a task box
const btn_up = document.getElementById("up")
const btn_down = document.getElementById("down")
const box = document.getElementById("task_div")

btn_down.addEventListener('click', function() {
    box.style.display = "flex"
    btn_up.style.display = "block"
    btn_down.style.display = "none"
    
    tasks[0].querySelector('.task_box_btn').click();
})

btn_up.addEventListener('click', function() {
    box.style.display = "none"
    btn_down.style.display = "block"
    btn_up.style.display = "none"
})

// Get all elements with class 'task'
const tasks = document.querySelectorAll('.task');

// Add click event listener to each task
tasks.forEach(task => {
    const toggleBtn = task.querySelector('.task_box_btn');
    const taskDetails = task.querySelector('.task_details_body');
    const tickBtn = task.querySelector('.tick_btn');
    const amt_clicked = document.querySelector('.amt_clicked');
    const bar = document.querySelector('.progress_bar_completed');

    // Add click event listener for toggling accordion
    toggleBtn.addEventListener('click', event => {
        const isOpen = taskDetails.classList.contains('open');

        // Close all other task_details
        tasks.forEach(otherTask => {
            const otherTaskDetails = otherTask.querySelector('.task_details_body');
            if (otherTaskDetails !== taskDetails) {
                otherTaskDetails.classList.remove('open');
                otherTask.classList.remove('active');
            }
        });

        // If the task_details_body was already open, do not close it
        if (!isOpen) {
            taskDetails.classList.toggle('open');
            task.classList.add('active');
        }
    });

    // Add click event listener for ticking behavior
    tickBtn.addEventListener('click', function () {
        tickBtn.classList.toggle('loading');

        // Trigger a click event on the associated task_box_btn
        toggleBtn.click();

        setTimeout(function () {
            tickBtn.classList.toggle('clicked');

            const progress = document.querySelectorAll('.clicked');
            const ticked_buttons = progress.length;

            amt_clicked.innerHTML = ticked_buttons;
            bar.style.width = (ticked_buttons * 20) + '%';
        }, 200);
    });
});

