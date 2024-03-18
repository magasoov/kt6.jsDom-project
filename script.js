ScrollReveal({
    reset: true,
    distance: '100px',
    diration: 60,
    delay:60
});
ScrollReveal().reveal('.about__container-one', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about__container-two', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.services', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.proccess__container-one div', { delay: 500, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.proccess__container-two div', { delay: 500, origin: 'bottom', interval: 50 });