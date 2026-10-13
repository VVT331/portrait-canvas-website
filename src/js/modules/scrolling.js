const scroll = (triggerUp) => {

    const upBtn = document.querySelector(triggerUp),
        element = document.documentElement,
        body = document.body;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1650) {
            upBtn.classList.add('animated', 'fadeIn');
            upBtn.classList.remove('fadeOut');
        } else {
            upBtn.classList.add('fadeOut');
            upBtn.classList.remove('fadeIn');
        }
    });

    function calcScroll() {
        upBtn.addEventListener('click', function (e) {
            let scroll = Math.round(body.scrollTop || element.scrollTop);

            if (this.hash !== '') {
                e.preventDefault();
                let hashElement = document.querySelector(this.hash),
                    hashElementTop = 0;

                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop);
                scrolling(scroll, hashElementTop, this.hash);
            }
        });
    }

    function scrolling(from, to, hash) {
        let timeInterval = 1,
            prevScroll,
            speed;

        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function () {
            let scroll = Math.round(body.scrollTop || element.scrollTop);

            if (prevScroll === scroll || (to > from && scroll >= to) || (to < from && scroll <= to)) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScroll = scroll;
            }
        }, timeInterval);
    }

    calcScroll();

};

export default scroll;