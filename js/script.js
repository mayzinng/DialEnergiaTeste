//Caso necessário
let dateNow = new Date()
let horas = dateNow.getHours()
let minutos = dateNow.getMinutes()



let submit = document.querySelector('#button-ok')
console.log(submit)


//Pegando valores do título e descrição

function Values() {

    
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

    const lembrete = [  { 
        "id": id, 
        "data": Data,
        "descricao": Descricao,
        "titulo": Title,
        "hora": Hours,
        }
    ]
        
    

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
        let atividades = []
        atividades.push[lembrete]

        //SAVE
        saveAtividades(atividades);
    } else {

        atividades = lembrete.map(function(obj) {
            return Object.keys(obj).map(function(key) {
                return obj[key];
            });
        });
        console.log(atividades);

        let atividadesRecuperadas = JSON.parse(atividadeExistente);
        atividades.push(lembrete)
        saveAtividades(atividadesRecuperadas);
        console.log(atividadesRecuperadas)
    }


    mostraAtividades();
}


function saveAtividades(lembrete) {
       
        const atividadeJSON = JSON.stringify(lembrete);
        const local = localStorage.setItem("lembrete", atividadeJSON);
        console.log(lembrete)
        console.log(atividadeJSON)
        console.log('oi')
        
}


function mostraAtividades() {
    let html = ''

    let atividadeExistente = localStorage.getItem("lembrete")
    
    let atividadesRecuperadas = JSON.parse(atividadeExistente)
    for(let i = 0; i < atividadesRecuperadas.length; i++) {
        html += formataAtividade(atividadesRecuperadas[i])        
    }

    document.getElementsByClassName('.activity').innerHTML = html
}

