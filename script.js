let content = document.querySelector('#content')
let inputs = document.querySelectorAll('.campo')
let validacao = document.querySelectorAll('.mensagem')
let btn = document.querySelector('button')

for(let i = 0; i < inputs.length; i++) {
    inputs[i].onblur = function() {
        validacao[i].innerHTML = ''

        if(inputs[i].value == '') {
            validacao[i].appendChild(document.createTextNode('Campo obrigatório.'))
        }
        else if (i == 1 && inputs[i].value.length < 6) {
            validacao[i].appendChild(document.createTextNode('O mínimo de caracteres é 6.'))
        }
    }
}

let form = document.querySelector('#form')
let resultado = document.querySelector('#resultado-msg')
let p = document.querySelector('.msg')
let close = document.querySelector('#close')

btn.onclick = function() {
    content.style.filter = "blur(20px)"
    resultado.style.visibility = "visible"
    console.log(resultado.style.visibility)

    for(let x of inputs) {
        p.innerHTML = ''

        if(x.value === '') {
            return p.appendChild(document.createTextNode('Não foi possível enviar o formulário. Preencha o campo: ' + x.name))
        }
        if(x.name == 'senha' && x.value.length < 6) {
            return p.appendChild(document.createTextNode('Não foi possível enviar o formulário. Insira uma senha válida.'))
        }
        
    }
    return p.appendChild(document.createTextNode('Formulário enviado com sucesso.'))
}

close.onclick = function() {
    resultado.style.visibility = "hidden"
    content.style.filter = "none"
}

