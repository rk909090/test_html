const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const registrationForm = document.getElementById('registrationForm');
const registrationType = document.getElementById('registrationType');
const acc = document.getElementsByClassName("accordion");

burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

function openForm(type) {
    registrationType.textContent = type;
    registrationForm.style.display = 'block';
}

function closeForm() {
    registrationForm.style.display = 'none';
}

new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 30,
    autoplay: 4000,
    hoverpause: true,
    animationDuration: 800,
    animationTimingFunc: 'ease-in-out',
}).mount();

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.classList.toggle("show");
        const icon = this.querySelector('svg');
        icon.classList.toggle('rotate-180');
    });
}
