console.log('oi')

//dependendo da hora da pessoa, apresentar um cumprimento
let dateNow = new Date()
let horas = dateNow.getHours()
let minutos = dateNow.getMinutes()
console.log(dateNow)
console.log(horas)
console.log(minutos)


function cumprimento() {
    const element = document.querySelector('#cumprimento')

    if(horas >= 18) {
        element.innerText = 'Boa noite!'
    } else if (horas >= 12) {
        element.innerText = 'Boa tarde!'
    } else if (horas >= 5) {
        element.innerText = 'Bom dia!'
    }
}

cumprimento()
