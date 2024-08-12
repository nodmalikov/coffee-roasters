const elsAccordionHead = document.querySelectorAll('.faq-accordion-head');

if (elsAccordionHead) {
    elsAccordionHead.forEach(function (elAccordionHead) {
        elAccordionHead.addEventListener('click', function () {
            // Barcha ochiq accordionlarni yopish
            elsAccordionHead.forEach(function (head) {
                const body = head.nextElementSibling;
                const icon = head.querySelector('.faq-accordion-icon');
                if (body.classList.contains('open-accordion')) {
                    body.classList.remove('open-accordion');
                    icon.classList.remove('faq-accordion-icon-rotate');
                }
            });
            
            // Bosilgan accordionni ochish yoki yopish
            const elAccordionBody = elAccordionHead.nextElementSibling;
            const elAccordionIcon = elAccordionHead.querySelector('.faq-accordion-icon');
            elAccordionBody.classList.toggle('open-accordion');
            elAccordionIcon.classList.toggle('faq-accordion-icon-rotate');
        });
    });
}
