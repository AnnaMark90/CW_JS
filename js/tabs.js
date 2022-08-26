document.querySelectorAll('.tabs-triggers-item').forEach((item) => 
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tabs-triggers-item').forEach(
            (child) => child.classList.remove('tabs-triggers-item-active'));
        
        document.querySelectorAll('.tabs-content-item').forEach(
            (child) => child.classList.remove('tabs-content-item-active'));

        item.classList.add('tabs-triggers-item-active');
        document.getElementById(id).classList.add('tabs-content-item-active');

    })
);

document.querySelector('.tabs-triggers-item').click();