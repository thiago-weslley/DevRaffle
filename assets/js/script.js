const raffleButton = document.querySelector('.raffle-button');

const generateNumber = () => {
    const min = parseInt(document.querySelector('#first-number').value);
    const max = parseInt(document.querySelector('#last-number').value);
    const drawnNumber = document.querySelector('#drawn-number');

    if (min < max) {
        const range = max - min + 1;
        const randomNumber = Math.floor(Math.random() * range) + min;

        drawnNumber.innerHTML = randomNumber;

        drawnNumber.classList.add('animate');

        setTimeout(() => {
            drawnNumber.classList.remove('animate');
        }, 640);
    } else {
        alert('O segundo número deve ser maior que o primeiro número');
    }
}

raffleButton.addEventListener('click', generateNumber);