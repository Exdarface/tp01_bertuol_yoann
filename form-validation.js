$('form').submit((event) => {
  event.preventDefault();
  let password = $('#password').val();
  let confirmPassword = $('#confirm-password').val();
  if (password !== confirmPassword) {
    alert('passwords are not the same.');
  }
});
