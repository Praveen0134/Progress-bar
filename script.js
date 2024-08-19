document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    
    let progress = 0;
    let interval;
    
    function updateProgress() {
        if (progress >= 100) {
            clearInterval(interval);
            progress = 100;
            alert('Progress Complete!');
        } else {
            progress += 1;
            progressBar.style.width = progress + '%';
        }
    }
    
    startButton.addEventListener('click', () => {
        if (!interval) {
            interval = setInterval(updateProgress, 100); // Adjust the speed of the progress
        }
    });
    
    stopButton.addEventListener('click', () => {
        clearInterval(interval);
        interval = null;
    });
    
    resetButton.addEventListener('click', () => {
        clearInterval(interval);
        interval = null;
        progress = 0;
        progressBar.style.width = progress + '%';
    });
});
