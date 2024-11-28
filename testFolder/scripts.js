// перемещение
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', e => {
        
        const nameInput = form.querySelector('#name');
        const emailInput = form.querySelector('#email');
        const messageInput = form.querySelector('#message');

        if (!nameInput.value.trim()) {
            alert('Пожалуйста, введите ваше имя.');
            e.preventDefault();
            return;
        }

        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            alert('Пожалуйста, введите корректный адрес электронной почты.');
            e.preventDefault();
            return;
        }

        if (!messageInput.value.trim()) {
            alert('Пожалуйста, напишите сообщение.');
            e.preventDefault();
            return;
        }
    });
}

// проверочка
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}