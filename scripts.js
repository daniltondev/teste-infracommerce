const form = document.getElementById("form")
const email = document.getElementById('email')
const password = document.getElementById('password')
const emailMsg = document.getElementById('email-msg')
const passwordMsg = document.getElementById('password-msg')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs()
})

function checkInputs() {
  const emailValue = email.value
  const passwordValue = password.value

  if (emailValue === "" && passwordValue === "") {
    emailMsg.style.visibility = "visible"
    passwordMsg.style.visibility = "visible"
  }else if (emailValue != "" && passwordValue === "") {
    emailMsg.style.visibility = "hidden"
    passwordMsg.style.visibility = "visible"
  }else if (emailValue === "" && passwordValue != "") {
    emailMsg.style.visibility = "visible"
    passwordMsg.style.visibility = "hidden"
  }else{
    return success(emailValue, passwordValue)
  }
}

function success(emailValue, passwordValue) {
  emailMsg.style.visibility = "hidden"
  passwordMsg.style.visibility = "hidden"
  console.log(`SEU EMAIL: ${emailValue}`)
  console.log(`SUA SENHA: ${passwordValue}`)
  alert(`Obrigado por se logar com o email: ${emailValue} Cheque o console para mais detalhes!`)
}