const columns = document.querySelectorAll('.column');

columns.forEach(col => {
    col.addEventListener('mouseover', () => {
        columns.forEach(col1 => col1.classList.remove('active'));
        col.classList.add('active');
    })
})