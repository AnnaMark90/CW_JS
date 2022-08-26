const accordion = Array.from(document.querySelectorAll('.accordion-item'));

accordion.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        let currentItem = e.target.closest('.accordion-item');
        let currentContent = e.target.nextElementSibling;

        currentItem.classList.toggle('active');

        if(currentItem.classList.contains('active')){
            currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
        }else{
            currentContent.style.maxHeight = 0;
        };
    });
});