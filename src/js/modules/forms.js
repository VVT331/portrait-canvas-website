const forms = () => {
    const forms = document.querySelectorAll('form'),
        uploads = document.querySelectorAll('[name=upload]');

    const message = {
        good: 'Отправка прошла успешно',
        load: 'Обрабатываем вашу заявку',
        fail: 'Произошла ошибка в отправке',
        goodImg: './assets/img/ok.png',
        loadImg: './assets/img/spinner.gif',
        failImg: './assets/img/fail.png'
    };

    const urlServers = {
        file: './assets/file.php',
        question: './assets/question.php'
    };

    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            form.classList.add('animated', 'fadeOut');

            setTimeout(() => {
                form.style.display = 'none';
            }, 300);

            const status = document.createElement('div');
            form.parentNode.appendChild(status);

            const statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.loadImg);
            status.appendChild(statusImg);

            const statusText = document.createElement('div');
            statusText.textContent = message.load;
            status.appendChild(statusText);

            const isFile = form.hasAttribute('data-file');
            let server;

            isFile ? server = urlServers.file : server = urlServers.question;
            const data = isFile ? new FormData(form) : Object.fromEntries(new FormData(form));

            const results = await postData(server, data, status, statusImg, statusText, isFile, form);
            console.log(results);

        });
    });

    uploads.forEach(upload => {
        upload.addEventListener('input', () => {

            const file = upload.files[0];
            console.log(file);

            upload.previousElementSibling.textContent = `${truncationName(file.name)}`;
        });
    });

    const postData = async (url, data, status, statusImg, statusText, file = false, form) => {
        try {

            let response;

            if (file) {
                response = await fetch(url, {
                    method: 'POST',
                    body: data
                });
            } else {
                response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
            }

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            statusImg.setAttribute('src', message.goodImg);
            statusImg.classList.add('animated', 'fadeInUp');
            statusText.textContent = message.good;

            return await response.json();

        } catch (e) {
            statusImg.setAttribute('src', message.failImg);
            statusText.textContent = message.fail;
        } finally {
            form.reset();
            form.classList.remove('fadeOut');
            form.classList.add('fadeIn');
            setTimeout(() => {
                status.remove();
                form.style.display = 'block';
            }, 3000);

            uploads.forEach(upload => {
                upload.previousElementSibling.textContent = 'Файл не выбран';
            });
        }
    };

    function truncationName(name) {

        const partsStr = name.split('.');

        if (name.length <= 10) {
            return name
        } else {
            const newName = partsStr[0].slice(0, 7) + partsStr[1];
            return newName
        }
    }
};

export default forms;