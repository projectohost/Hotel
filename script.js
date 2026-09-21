// Знаходимо кнопку за її ID
document.addEventListener('DOMContentLoaded', function () {
  const sendBtn = document.getElementById('sendBtn');

  
    sendBtn.addEventListener('click', function () {
      let lastName = prompt("Введіть ваше прізвище:");
      if (lastName === null) return;

      let firstName = prompt("Введіть ваше ім'я:");
      if (firstName === null) return;

      let message = prompt("Введіть ваше повідомлення:");
      if (message === null) return;

      if (lastName.trim() !== "" && firstName.trim() !== "" && message.trim() !== "") {
        alert(`Дякуємо, ${firstName} ${lastName}! Ваше повідомлення успішно надіслано.`);
      } else {
        alert("Будь ласка, заповніть усі поля!");
      }
    });
  
});