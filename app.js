// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//  Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
let nombres = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre == ""){ // Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
      alert('El nombre ingresado es ivalido')
      return;
    }
    nombres.push(nombre);
    lista()
    input.value = "";
}
// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entras
function lista(){
  let lis = document.getElementById('listaAmigos')
  lis.innerHTML = "";

  nombres.forEach(nombre => {
    let li = document.createElement("li");
    li.textContent = nombre;
    lis.appendChild(li);
});
}

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Agrega nombres antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let resultado = "Amigo Secreto: " + nombres[indiceAleatorio];

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = resultado;

    // Ocultar la lista de nombres
    document.getElementById("lista").style.display = "none";
    lista("none")
}


