// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//  Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
let nombres = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim() ;

    if (nombre == ""){ // Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
      alert('El nombre ingresado es ivalido')
      return;
    }
    nombres.push(nombre);
    lista()
}
// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entras


// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.


