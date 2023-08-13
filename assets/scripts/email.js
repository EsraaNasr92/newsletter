function validateForm(){
  
  const emailInput = document.getElementById("email");
  const emailErrorMessage = document.getElementById("error_message");
  const successEmail = document.getElementById("email_placeholder");
  const mainContainer = document.getElementById("main");
  const thankYou = document.getElementById("thankyou");

  
  let validation = `!#$%^&*()-=[];',_+{}:"<>?/|~`
  let atChar = "@"
  let input = emailInput.value

  for (let i = 0; i < validation.length; i++) {
      if (input.includes(validation.charAt(i))) {
          emailInput.style.border = "1px solid red"
          emailErrorMessage.innerHTML = "Wrong Characters"
          break;
      } else if (!input.includes(atChar)) {
          emailInput.style.border = "1px solid red"
          emailErrorMessage.innerHTML = "Not a valid email"
      } else {
          successEmail.innerHTML = emailInput.value
          mainContainer.style.display = "none"
          thankYou.style.display = "block"
      }
  }

}

function dismiss(){
  document.getElementById('main').style.display='inherit';
  document.getElementById('thankyou').style.display='none';
  document.getElementById('email').value = '';
}