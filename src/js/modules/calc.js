const calc = (size, material, options, promo, result, objData) => {
    const sizeEl = document.querySelector(size),
        materialEl = document.querySelector(material),
        optionsEl = document.querySelector(options),
        promoEl = document.querySelector(promo),
        resultEl = document.querySelector(result);

    let sum = 0;

    const arrEl = [sizeEl, materialEl, optionsEl, promoEl];

    const calcFunction = () => {

        const sizeVal = +sizeEl.value,
            materialVal = +materialEl.value,
            optionsVal = +optionsEl.value;

        if (isNaN(sizeVal) || isNaN(materialVal) || sizeVal === 0 || materialVal === 0) {
            resultEl.textContent = 'Выберите размер и материал картины';
            return;
        }

        sum = Math.round(sizeVal * materialVal + optionsVal);

        if (promoEl.value === 'IWANTPOPART') {
            resultEl.textContent = Math.round(sum * 0.7);
        } else {
            resultEl.textContent = sum;
        }
    };

    function addEvent(elem, key) {
        if (elem.classList.contains('promocode')) {
            elem.addEventListener('input', calcFunction);
        } else {
            elem.addEventListener('change', () => {
                calcFunction();
                objData[key] = elem.value;
            });

        }
    }

    arrEl.forEach(elem => {
        addEvent(elem, elem.id);
    });

};

export default calc;