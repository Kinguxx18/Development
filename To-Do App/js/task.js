const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener('click', (e) => {
        // evita que botones disparen esto
        if (e.target.tagName === 'BUTTON') return;
        task.classList.toggle('completed');
    });
});