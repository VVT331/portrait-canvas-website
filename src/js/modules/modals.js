const modals = () => {

    let openModal = false;
    let timerId = null;
    let timerCount = 0;

    function changingModalWindow(openBtnSelector, modalSelector, closeBtnSelector) {

        const openBtn = document.querySelectorAll(openBtnSelector),
            modal = document.querySelector(modalSelector),
            closeBtn = modal.querySelector(closeBtnSelector);

        openBtn.forEach(btn => {
            btn.addEventListener('click', () => {

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${deleteScroll()}px`;
                modal.classList.add('animated', 'fadeIn');
                stopTimer();
                openModal = true;

                if (modal.classList.contains('popup-gift') && btn.classList.contains('fixed-gift')) {
                    btn.style.display = 'none';
                }
            });
        });

        closeBtn.addEventListener('click', (e) => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = ``;
            // startTimer(10000);

            openBtn.forEach(btn => {
                if (modal.classList.contains('popup-gift') && btn.classList.contains('fixed-gift')) {
                    btn.style.display = 'block';
                }
            });
        });

        modal.addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains(modalSelector.replace(/\./, ''))) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = ``;
                // startTimer(10000);

            }

            openBtn.forEach(btn => {
                if (modal.classList.contains('popup-gift') && btn.classList.contains('fixed-gift')) {
                    btn.style.display = 'block';
                }
            });
        });
    }

    // startTimer(10000);

    function startTimer(time) {
        if (timerId || timerCount >= 1) return

        timerId = setTimeout(() => {
            openModalGift('.popup-consultation');
            timerCount++;
            timerId = null;
        }, time);
    }

    function stopTimer() {
        clearTimeout(timerId);
        timerId = null;
    }

    function openModalGift(selector) {
        const modal = document.querySelector(selector);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${deleteScroll()}px`;
        modal.classList.add('animated', 'fadeIn');
        openModal = true;
    }

    window.addEventListener('scroll', () => {
        const scroll = Math.ceil(window.scrollY);

        if (!openModal && document.documentElement.scrollHeight <= document.documentElement.clientHeight + scroll) {
            openModalGift('.popup-gift');
            document.querySelector('.fixed-gift').style.display = 'none';
        }
    });

    function deleteScroll() {
        const scroll = document.createElement('div');

        scroll.style.width = '50px';
        scroll.style.height = '50px';
        scroll.style.overflowY = 'scroll';
        scroll.style.visibility = 'hidden';
        document.body.append(scroll);

        const difference = scroll.offsetWidth - scroll.clientWidth;

        scroll.remove();

        return difference
    }

    changingModalWindow('.button-design', '.popup-design', '.popup-close');
    changingModalWindow('.button-consultation', '.popup-consultation', '.popup-close');
    changingModalWindow('.fixed-gift', '.popup-gift', '.popup-close');
};

export default modals;