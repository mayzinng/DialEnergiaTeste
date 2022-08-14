//imports



//Pegando valores do título e descrição
let submit = document.querySelector('.button-ok')

let Values = submit.onclick = function values() {
    let titulo = document.querySelector('#title')
    let tituloValor = titulo.value

    let descricao = document.querySelector('#descricao')
    let descricaoValor = descricao.value

    let data = document.querySelector('input[type="date"]')
    let dataValor = data.value

    let hora = document.querySelector('input[type="time"]')
    let horaValor = hora.value

    console.log(tituloValor)
    console.log(descricaoValor)
    console.log(dataValor)
    console.log(horaValor)

    let error = document.querySelector('.error')

    // switch (tituloValor) {
    //     case '': error.innerText = 'Insira uma descrição'
    // }

    if(tituloValor || dataValor || horaValor || descricaoValor == '') {
        error.innerText = 'Preencha todos os campos'
    }
 
}

