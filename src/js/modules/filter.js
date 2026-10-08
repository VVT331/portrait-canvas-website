const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    function showContent(generalClass) {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        markAll.forEach(mark => {
            if (generalClass === 'grandmother' || generalClass === 'granddad') {
                no.classList.add('animated', 'fadeIn');
                no.style.display = 'block';
            } else if (mark.classList.contains(generalClass)) {
                mark.classList.add('animated', 'fadeIn');
                mark.style.display = 'block';
            }
        });
    }

    items.forEach(btn => {
        btn.addEventListener('click', () => {
            const btnClass = btn.className;

            if (btn.classList.contains('active')) {
                return
            } else {

                items.forEach(btn => {
                    btn.classList.remove('active');
                });

                btn.classList.add('active');
                showContent(btnClass);

            }
        });
    });
};

export default filter;