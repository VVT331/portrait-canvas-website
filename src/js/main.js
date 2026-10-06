"use strict";

import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkText from "./modules/checkTextInputs";
import showContent from "./modules/showMoreContent";

document.addEventListener('DOMContentLoaded', () => {

    modals();
    sliders('.feedback-slider-item', '.main-prev-btn', '.main-next-btn', 'horiz');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkText('[name="name"]');
    checkText('[name="message"]');
    showContent('.button-styles', '#styles .row');
});