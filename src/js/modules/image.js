const image = (selectorEl) => {

    const blocks = document.querySelectorAll(selectorEl);

    function changeImage(element) {
        const elChildren = element.querySelectorAll(`p:not(.sizes-hit)`),
            elImg = element.querySelector(`img`);

        elChildren.forEach(el => {
            el.style.display = 'none';
        });

        elImg.src = elImg.src.slice(0, -4) + '-1.png';
    }

    function rollbackImage(element) {
        const elChildren = element.querySelectorAll(`p:not(.sizes-hit)`),
            elImg = element.querySelector(`img`);

        elChildren.forEach(el => {
            el.style.display = 'block';
        });

        elImg.src = elImg.src.slice(0, -6) + '.png';
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            changeImage(block);
        });

        block.addEventListener('mouseout', () => {
            rollbackImage(block);
        });
    });
};

export default image;