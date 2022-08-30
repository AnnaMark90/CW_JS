const tooltip = () =>{
    let elems = document.querySelectorAll('.tooltip_elem');

    [...elems].forEach((elem) => {
        elem.addEventListener('mouseover', e => {
            createTool(e);
        });
    });

    function createTool(e) {
        let tip = document.createElement('div');
        tip.classList.add('tip_active');
        tip.innerText = e.target.title;
        tip.style.top = pos.x - tip.offsetHeight + 'px';
        tip.style.left = pos.y + 'px';

        document.body.append(tip);
    }
};
