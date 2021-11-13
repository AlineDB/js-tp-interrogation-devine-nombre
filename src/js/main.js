const number = 35;
const input = document.querySelector("#number");
const message = document.querySelector(".message");
let count = 1;
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const currentNumber = parseInt(input.value)
  if (number === currentNumber) {
    message.textContent = `(${count}) Vous avez gagné 🥳  : ${number}`;
    count = 1;
    message.className = "message";
    document.body.insertAdjacentHTML('beforeend', '<div class="center-img"><img src="https://media.giphy.com/media/l3cyxQvWJ4P8r3VQsb/source.gif" alt="Dolly Parton"></div>');
  } else {
    if (currentNumber < number) {
      message.textContent = `(${count++}) Eh non, c'est plus 👆`;
    } else {
      message.textContent = `(${count++}) Eh non, c'est moins 👇`;
    }
    message.className = "message error";
    document.querySelector('.center-img')?.remove();
  }
  console.log(input.value);
});

