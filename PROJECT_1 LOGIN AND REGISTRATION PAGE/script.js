const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click',()=>
{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click',()=>
{
    container.classList.remove("sign-up-mode");
});

function validateForm() {
    // Get the form elements
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
  
    // Validate the name field
    if (name.value === "") {
      alert('Please enter your name');
      return false;
    }
  
    // Validate the email field
    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    // Validate the password field
    if (password.value === "") {
      alert('Please enter a password');
      return false;
    }

  }

  function validateSignInForm() {
    // Get the form elements
    var name = document.getElementById('name');
    var password = document.getElementById('password');
  
    // Validate the name field
    if (name.value === "") {
      alert('Please enter your name');
      return false;
    }
  
    // Validate the password field
    if (password.value === "") {
      alert('Please enter a password');
      return false;
    }
  
    
  }