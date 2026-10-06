const showContent = (trigger, parentSelector) => {

    const btn = document.querySelector(trigger);

    btn.addEventListener('click', async function () {
        const data = await getData('http://localhost:3000/styles');

        createCards(data);

        this.remove();
    });


    function createCards(data) {
        data.forEach(({ src, title, link }) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')

            card.innerHTML = `
                <div class="styles-block">
					<img src=${src} alt="style>
					<h4>${title}</h4>
					<a href="${link}">Подробнее</a>
				</div>
            `

            document.querySelector(parentSelector).appendChild(card);
        });
    }


    const getData = async (url) => {

        try {
            let res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Ошибка HTTP: ${res.status}`);
            }

            return await res.json();
        } catch (e) {

        }
    }
};

export default showContent;