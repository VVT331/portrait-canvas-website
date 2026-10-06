const sliders = (slideSel, prevBtnSel = false, nextBtnSel = false, dir) => {

    let slideIndex = 0;
    let timerId = null;

    const slides = document.querySelectorAll(slideSel);

    startTimer(3000);

    function switchingSlide(i) {
        if (i > slides.length - 1) {
            slideIndex = 0;
        }

        if (i < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        slides[slideIndex].style.display = 'block';
    }

    switchingSlide(0);

    if (prevBtnSel && nextBtnSel && dir === 'horiz') {

        const prevBtn = document.querySelector(prevBtnSel),
            nextBtn = document.querySelector(nextBtnSel);

        prevBtn.addEventListener('click', () => {
            switchingSlide(slideIndex -= 1);
            slides[slideIndex].classList.remove('slideInLeft');
            slides[slideIndex].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            switchingSlide(slideIndex += 1);
            slides[slideIndex].classList.remove('slideInRight');
            slides[slideIndex].classList.add('slideInLeft');
        });
    } else {
        startTimer(3000);
    }

    slides.forEach(slide => {
        slide.addEventListener('mouseover', () => {
            stopTimer();
        });

        slide.addEventListener('mouseout', () => {
            startTimer(3000);
        });
    });


    function startTimer(time) {
        if (timerId) return

        if (dir === 'horiz') {
            timerId = setInterval(() => {
                switchingSlide(slideIndex += 1);
                slides[slideIndex].classList.remove('slideInRight');
                slides[slideIndex].classList.add('slideInLeft');
            }, time);
        } else {
            timerId = setInterval(() => {
                switchingSlide(slideIndex += 1);
                slides[slideIndex].classList.add('slideInDown');
            }, time);
        }
    }

    function stopTimer() {
        clearTimeout(timerId);
        timerId = null;
    }
};

export default sliders;