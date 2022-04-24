let formLogin = document.querySelector('#login-formulario')

formLogin.addEventListener('submit', login)

function login(event){
  event.preventDefault()

  let temErro = false

  let firstName = document.forms['login-formulario']['firstname']

  if(!firstName.value){
    firstName.classList.add('inputErro')
    let spanFirst = document.querySelector('.erroFirst')
     spanFirst.innerText = 'First Name cannot be empty'
     temErro = true
  }
  else{
    firstName.classList.remove('inputErro')
    let spanFirst = document.querySelector('.erroFirst')
     spanFirst.innerText = null
  }

  let lastName = document.forms['login-formulario']['lastname']

  if(!lastName.value){
    lastName.classList.add('inputErro')
    let spanLast = document.querySelector('.erroLast')
    spanLast.innerText = 'Last Name cannot be empty'
    temErro = true
  }
  else{
    lastName.classList.remove('inputErro')
    let spanLast = document.querySelector('.erroLast')
    spanLast.innerText = null
  }

  let email = document.forms['login-formulario']['email']

  if(!email.value){
    email.classList.add('inputErro')
    let spanEmail = document.querySelector('.erroEmail')
    spanEmail.innerText = 'Looks like this is not an email'
    temErro = true
  }
  else{
    email.classList.remove('inputErro')
    let spanEmail = document.querySelector('.erroEmail')
    spanEmail.innerText = null
  
  }

  let password = document.forms['login-formulario']['password']

  if(!password.value){
    password.classList.add('inputErro')
    let spanPassword = document.querySelector('.erroPassword')
    spanPassword.innerText = 'Password cannot be empty'
    temErro = true
  }
  else{
    password.classList.remove('inputErro')
    let spanPassword = document.querySelector('.erroPassword')
    spanPassword.innerText = null
  }

  if(!temErro){
    formLogin.submit()
  }
  
}