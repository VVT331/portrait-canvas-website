"use strict";

import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkText from "./modules/checkTextInputs";
import showContent from "./modules/showMoreContent";
import calc from "./modules/calc";
import filter from "./modules/filter";
import image from "./modules/image";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scroll from "./modules/scrolling";
import drop from "./modules/drop";

document.addEventListener('DOMContentLoaded', () => {

    const calcData = {};

    modals();
    calc('#size', '#material', '#options', '.promocode', '.calc-price', calcData);
    sliders('.feedback-slider-item', '.main-prev-btn', '.main-next-btn', 'horiz');
    sliders('.main-slider-item', 'vertical');
    forms(calcData);
    mask('[name="phone"]');
    checkText('[name="name"]');
    checkText('[name="message"]');
    showContent('.button-styles', '#styles .row');
    filter();
    image('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger-menu', '.burger');
    scroll('.pageup');
    drop();
});