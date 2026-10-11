const accordion = (triggers, items) => {
    const btns = document.querySelectorAll(triggers),
        contents = document.querySelectorAll(items);

    contents.forEach(content => {
        content.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });

                this.classList.add('active', 'active-style');
            }
        });
    });
};

export default accordion;