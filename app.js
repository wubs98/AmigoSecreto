let amigos = [];
let i = 0;
let count = 0;

function limparCampo(){

    let campo = document.querySelector("input");
    campo.value = "";

}

function percorreLista(){

    let lista = document.getElementById("listaAmigos");
    let amigo;

    while (i < count){
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


