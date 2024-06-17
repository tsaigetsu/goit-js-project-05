export function workTogether() {
    const form = document.querySelector('.workTogether-form');
    const successModal = document.querySelector('.modal-overlay');
    const modalContent = document.querySelector('.modal-content')
    const closeModal = document.querySelector('.close-btn')
    const body = document.body;

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = form.email.value;
        const message = form.message.value;

        try {
            const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    comment: message,
                })

            });
            if (response.ok) {
                successModal.style.visibility = 'visible';
                successModal.style.pointerEvents = 'auto';
                modalContent.style.visibility = 'visible';
                modalContent.style.pointerEvents = 'auto';
                body.classList.add('header_overflow-hidden');
                form.reset();
            } else {
                alert(`Error: ${response.status}`);
            }
            
        } catch (error) {
            alert('Failed to send the message. Please try again.');
        }

    });

    const closeModalFunction = function () {
        successModal.style.visibility = 'hidden';
        successModal.style.pointerEvents = 'none';
        modalContent.style.visibility = 'hidden';
        modalContent.style.visibility = 'none';
        body.classList.remove('header_overflow-hidden');
    };

    closeModal.addEventListener('click', closeModalFunction);

    window.addEventListener('click', function (e) {
        if (e.target === successModal) {
            closeModalFunction();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModalFunction()
        }
    });

}


