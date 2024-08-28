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
    breakpoints: {
        768: {
            perView: 1,
        },
    },
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

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        title: formData.get('title'),
        workshopType: formData.get('workshopType')
    };
    
    fetch('https://script.google.com/macros/s/AKfycbzOeF1360q18Uv9rqOFZSXkVpg9AipwTyfqdDKNtKYjTXoF19lsri-f1Xf_qnN-SGvePw/exec', {
        method: 'POST',
        mode: 'no-cors', // This mode is used to avoid CORS issues
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        alert('Thank you for registering!');
        closeForm();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error with your submission.');
    });
});
