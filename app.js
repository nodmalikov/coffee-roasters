const elsAccordionHead = document.querySelectorAll('.faq-accordion-head');
const elJsModalPlan = document.querySelector('.js-modal-plan');
const elJsButtonFaq = document.querySelector('.js-button-faq');
const elJsFooterModalButton = document.querySelector('.js-modal-footer-button');

if (elsAccordionHead) {
    elsAccordionHead.forEach(function (elAccordionHead) {
        elAccordionHead.addEventListener('click', function () {
            // BARCHA OCHIQ ACCORDIONLARNI YOPISH
            elsAccordionHead.forEach(function (head) {
                const body = head.nextElementSibling;
                const icon = head.querySelector('.faq-accordion-icon');
                if (body.classList.contains('open-accordion')) {
                    body.classList.remove('open-accordion');
                    icon.classList.remove('faq-accordion-icon-rotate');
                }
            });
            
            // BOSILGAN ACCORDIONNI OCHISH YOKI YOPISH
            const elAccordionBody = elAccordionHead.nextElementSibling;
            const elAccordionIcon = elAccordionHead.querySelector('.faq-accordion-icon');
            elAccordionBody.classList.toggle('open-accordion');
            elAccordionIcon.classList.toggle('faq-accordion-icon-rotate');
        });
    });
}

if (elJsButtonFaq) {
    elJsButtonFaq.addEventListener('click', function () {
        elJsModalPlan.classList.add('open-modal');
    });
}

if (elJsFooterModalButton) {
    elJsFooterModalButton.addEventListener('click', function () {
        elJsModalPlan.classList.remove('open-modal');
    });
}
