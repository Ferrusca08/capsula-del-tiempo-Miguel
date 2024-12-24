
// Cargar las cápsulas desde localStorage
function loadCapsules() {
  // Obtener las cápsulas de localStorage (si no hay, es un arreglo vacío)
  const capsules = JSON.parse(localStorage.getItem("capsules")) || [];
  displayCapsules(capsules);
}

// Mostrar las cápsulas en la página
function displayCapsules(capsules) {
  const container = document.getElementById("capsulesContainer");
  container.innerHTML = ""; // Limpiar el contenedor antes de añadir nuevos elementos

  capsules.forEach((capsule) => {
    const div = document.createElement("div");
    div.className = "capsule";
    
    const openingDate = new Date(capsule.date);
    const currentDate = new Date();
    
    // Calcular el tiempo restante
    const countdown = openingDate - currentDate;

    // Si la fecha es en el futuro, mostramos la cuenta regresiva
    if (countdown > 0) {
      const daysLeft = Math.floor(countdown / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((countdown % (1000 * 60)) / 1000);

      div.innerHTML = `
        <h3>${capsule.title}</h3>
        <p>Abrir en: ${openingDate.toLocaleString()}</p>
        <p>Faltan: ${daysLeft} días, ${hoursLeft} horas, ${minutesLeft} minutos, ${secondsLeft} segundos</p>
        <p>Participantes: ${capsule.participants.join(", ")}</p>
      `;
    } else {
      // Si la fecha ya pasó, solo mostramos la fecha
      div.innerHTML = `
        <h3>${capsule.title}</h3>
        <p>La cápsula ya está abierta desde: ${openingDate.toLocaleString()}</p>
        <p>Participantes: ${capsule.participants.join(", ")}</p>
      `;
    }

    container.appendChild(div);
  });
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", loadCapsules);
