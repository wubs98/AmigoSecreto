let amigos = [];
let i = -1;
let count = -1;

function gerarIndiceAleatorio(){

    //Função não está sorteando o primeiro elemento da lista "índice 0"

    let tamanhoLista = amigos.length;
    let indice = Math.floor(Math.random() * tamanhoLista);

    if (tamanhoLista == 1){
        alert("Insira mais amigos para sortear");
    } else {
        return indice;
    }
}


function limparCampo(){

    let campo = document.querySelector("input");
    campo.value = "";

}

function percorreLista(){

    let lista = document.getElementById("listaAmigos");
    let amigo;

    while (i <= count){
        amigo = document.createElement("li");
        amigo.textContent = amigos[i];
        lista.appendChild(amigo);
        i++;
    }

}

function adicionarAmigo() {

    let amigo = document.querySelector("input").value;

    if (amigo == "") {
        alert("Por Favor, insira um nome");
    } else {
        amigos.push(amigo);
        count++;
        percorreLista();
    }

    limparCampo();
}

function sortearAmigo(){

    let amigoSorteado = document.getElementById("resultado");

    if (count > 0){
        j = gerarIndiceAleatorio();
        amigoSorteado.innerHTML = `O sorteado foi: ${amigos[j]}!`;
    } else {
        alert("Adicione Amigos na Lista");
    }
}
