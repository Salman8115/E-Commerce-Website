// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
//   function redirectToHomePage() {
//     window.location.href = "index.html";
// }
// });
const signUpButton = document.getElementById('sign-up-btn');
const signInButton = document.getElementById('sign-in-btn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

// Add event listener for the login form submission
document.querySelector('.sign-in-form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Redirect to the index page
  window.location.href = 'index.html';
});

// Add event listener for the signup form submission
document.querySelector('.sign-up-form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Redirect to the sign-in form after signup
  container.classList.remove('sign-up-mode');
});
