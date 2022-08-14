//Caso necessário
let dateNow = new Date()
let horas = dateNow.getHours()
let minutos = dateNow.getMinutes()



let submit = document.querySelector('#button-ok')

//Pegando valores do título e descrição

submit.onclick = function Values() {

    
    let titulo = document.querySelector('#title')
    let tituloValor = titulo.value
    
    let descricao = document.querySelector('#descricao')
    let descricaoValor = descricao.value
    
    let date = document.querySelector('input[type="date"]')
    let dateValor = date.value
    
    let hora = document.querySelector('input[type="time"]')
    let horaValor = hora.value

    let referencia = new Date()
    let id = referencia.getTime()
    let Data = dateValor
    let Descricao = descricaoValor
    let Title = tituloValor
    let Hours = horaValor

    const lembrete = {
        "id": id, 
        "data": Data,
        "descricao": Descricao,
        "titulo": Title,
        "hora": Hours,
    }
    

    //checando os valores
    console.log(tituloValor)
    console.log(descricaoValor)
    console.log(dateValor)
    console.log(horaValor)

    let error = document.querySelector('.error')
    let right = document.querySelector('.right')
    console.log(error)
    console.log(right)

    if(tituloValor == '') {
        error.innerText = 'Preencha todos os campos';
    } else if ( dateValor == '') {
        error.innerHTML = 'Preencha todos os campos';
    } else if ( horaValor == '' ) {
        error.innerHTML = 'Preencha todos os campos';
    } else if ( descricaoValor == '') {
        error.innerHTML = 'Preencha todos os campos';
    } else if (tituloValor && dateValor && horaValor && descricaoValor !== '') {
        right.innerHTML = 'Campos preenchidos';
        error.innerHTML = '';
    }

    let atividadeExistente = localStorage.getItem("lembrete");
    if(atividadeExistente == null || atividadeExistente == '') {
        const atividades = []
        atividades.push[lembrete]

        //SAVE
        saveAtividades(lembrete);
    } else {
        let atividadesRecuperadas = JSON.parse(atividadeExistente);
        atividadesRecuperadas.push(lembrete)
        saveAtividades(lembrete);
    }

    console.log(lembrete)
}

function saveAtividades(lembrete) {
       
        const atividadeJSON = JSON.stringify(lembrete);
        localStorage.setItem("le]", atividadeJSON);
        console.log(lembrete)
        console.log(atividadeJSON)
        console.log('oi')
        
}


function adicionaAsAtividades(lembrete) {

}

