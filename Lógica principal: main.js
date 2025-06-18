// Cargar los datos desde eventos.json
fetch('eventos.json')
  .then(response => response.json())
  .then(data => {
    mostrarEventos(data.eventosSemana, "lista-eventos");
    mostrarEventos(data.eventosDestacados, "lista-destacados");
  })
  .catch(error => {
    console.error("Error al cargar los eventos:", error);
  });

// Función para mostrar eventos en una lista
function mostrarEventos(eventos, idLista) {
  const lista = document.getElementById(idLista);
  lista.innerHTML = "";

  eventos.forEach(evento => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${evento.deporte}</strong>: ${evento.descripcion} <br><em>${evento.fecha}</em>`;
    lista.appendChild(item);
  });
}
