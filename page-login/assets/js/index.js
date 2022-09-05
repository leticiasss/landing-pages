const botaoLogin = document.querySelector('.logar')
const inputLogin = document.querySelector('.formulario-login')

botaoLogin.addEventListener('click', function(event){
    event.preventDefault()
    let errors = validarInputs()
    let corrigeAltura = document.querySelector('.image-unsplash')
    corrigeAltura.classList.add('corrige-altura') // gambi para arrumar!!! retirar do código depois
    if(errors.length > 0){
        exibeErrors(errors)
        return
    }

    inputLogin.reset()
    let mensagemError = document.querySelector('.error')
    mensagemError.innerHTML = ''
    corrigeAltura.classList.remove('corrige-altura')

})

function validarInputs(){
    const emailValido = inputLogin.email.value
    const senhaValida = inputLogin.senha.value
    let errors = []
    if(emailValido.length == 0){
        errors.push('E-mail não pode ficar em branco!')
    } else if(senhaValida.length <= 3){
        errors.push('Senha inválida!')
    }
    return errors
}

function exibeErrors(errors){
    let ulError = document.querySelector('.error')
    ulError.innerHTML = ''

    errors.forEach(function(error){
        let liError = document.createElement('li')
        liError.classList.add('error-li')
        liError.textContent = error
        ulError.appendChild(liError)
    });
}