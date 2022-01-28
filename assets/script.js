let senha = document.querySelector('.senha-input')
senha.type = 'password'
let divSenha = document.querySelector('.senha-div')

let email = document.querySelector('.email-input') 
let divEmail = document.querySelector('.email-div')

let senhaLogo = document.querySelector('.senha-logo')
let emailLogo = document.querySelector('.email-logo')

let eye = document.querySelector('.eye')
let container = document.querySelector('.container')

email.addEventListener('click', event =>{
    holdOn(divEmail)
    emailLogo.setAttribute('src' ,'./img/mail-focus.svg')
    divEmail.classList.add("click")
})

divEmail.addEventListener('mouseover', event =>{
    holdOn(divEmail)
    emailLogo.setAttribute('src' ,'./img/mail-focus.svg')
})

divEmail.addEventListener('mouseout', event =>{
    holdOver(divEmail)
    emailLogo.setAttribute('src' ,'./img/mail.svg')
})

senha.addEventListener('click', event =>{
    holdOn(divSenha)
    senhaLogo.setAttribute('src' ,'./img/lock-focus.svg')
})

divSenha.addEventListener('mouseover', event => {
    holdOn(divSenha)
    senhaLogo.setAttribute('src' ,'./img/lock-focus.svg')
})

divSenha.addEventListener('mouseout', event =>{
    holdOver(divSenha)
    senhaLogo.setAttribute('src' ,'./img/lock.svg')
})

senha.addEventListener('click', event =>{
    holdOn(divSenha)
    senhaLogo.setAttribute('src' ,'./img/lock-focus.svg')
})

eye.addEventListener('click', event =>{
    container.classList.toggle('visible')
    if(container.classList.contains('visible')){
        eye.src = "./img/eye-off.png"
        senha.type = 'text'
    }else {
        eye.src = "./img/eye.svg"
        senha.type = 'password'
    }
})

function holdOn(div){
    div.classList.add('holdOn')
    div.classList.remove('holdOver')
}

function holdOver(div){
    div.classList.add('holdOver')
    div.classList.remove('holdOn')
}