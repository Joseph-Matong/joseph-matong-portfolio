// Example: Simple form validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  if (!name || !email) {
    alert('Please fill out all required fields');
    event.preventDefault();
  }
});
