let contador = 0;
let input  = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    let valorInput = input.value;
    if ((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)){
        
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="concluir(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>

            </div>
            <div  onclick="concluir(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>

            </div>`;

            main.innerHTML += novoItem;
            input.value = '';
            input.focus();
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function concluir(id) {
    var item = document.getElementById(id);
    var icone = document.getElementById('icone_' + id);

    if (!item.classList.contains('clicado')) {

        item.classList.add('clicado');
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);

    } else {

        item.classList.remove('clicado');
        icone.classList.add('mdi-circle-outline');
        icone.classList.remove('mdi-check-circle');
    }
}