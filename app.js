// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        amigos.push(nombre); 
        actualizarLista(); 
        input.value = ""; 
    }
  else alert("Coloca un nombre válido");
}


function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos 2 nombres para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio]; 

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = ` El amigo secreto es: ${amigoSorteado} `;
    resultado.appendChild(li);
}
