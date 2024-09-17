const toggle = document.getElementById('dark-mode-toggle');

// Set initial state based on saved user preference
document.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('dark-mode') === 'true';
  toggle.checked = darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
});

// Toggle dark mode
toggle.addEventListener('change', () => {
  const isDarkMode = toggle.checked;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('dark-mode', isDarkMode);
});

// Simple form validation
document.getElementById('login-button').addEventListener('click', () => {
  let valid = true;

  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const usernameError = document.getElementById('username-error');
  const passwordError = document.getElementById('password-error');

  // Clear previous errors
  usernameError.textContent = '';
  passwordError.textContent = '';

  if (!username.value.trim()) {
    usernameError.textContent = 'Username is required.';
    valid = false;
  }

  if (!password.value.trim()) {
    passwordError.textContent = 'Password is required.';
    valid = false;
  }

  if (valid) {
    alert('Login successful!');
    // Handle successful login here
  }
});
