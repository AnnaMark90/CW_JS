const gallery = (selector) => {
    const gallery = document.getElementById(selector);

    let elem = gallery.getElementsByClassName('gallery__thumbs')[0].children;

    [...elem].forEach((elem) => {
        elem.addEventListener('click', (e) => show(e));
    });

    function show(e) {
        e.preventDefault();

        let preview = document.querySelector('.gallery__preview');

        preview.style.visibility = "visible";
        // preview.classList.remove('close');
        let src = e.target.parentElement.href;
        let img = document.createElement('img');
        img.setAttribute('href', '#');
        img.setAttribute('src', src);

        preview.append(img);

        // let close_pop = preview.nextElementSibling;
        // close_pop.addEventListener('click', hide);

        // function hide() {
        //     preview.style.visibility = "hidden";
        // };

        let close_pop_up = (e) => {
            preview.classList.add('close')
        };

        let closeBtn = document.querySelector('gallery__preview_close');
        closeBtn.addEventListener('click', close_pop_up);
    };


};

gallery('gallery'); // id
