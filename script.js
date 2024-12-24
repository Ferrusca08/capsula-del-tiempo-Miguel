




document.getElementById("createNewBtn").addEventListener("click", function () {
  window.location.href = "nueva_capsula.html"; // Asegúrate de que el nombre del archivo sea correcto
});


const capsuleDate = localStorage.getItem("capsuleDate");

if (!capsuleDate) {
  document.getElementById("countdown").innerHTML =
    "No hay una cápsula configurada. Crea una nueva.";
} else {
  const openingDate = new Date(capsuleDate);

  // Validar si la fecha es válida
  if (openingDate <= new Date()) {
    document.getElementById("countdown").innerHTML =
      "La fecha de apertura ya pasó. Configura una nueva cápsula.";
  } else {
    // Función para actualizar la cuenta regresiva
    function updateCountdown() {
      const now = new Date();
      const timeDifference = openingDate - now;

      if (timeDifference <= 0) {
        document.getElementById("countdown").innerHTML =
          "¡Es hora de abrir tu cápsula!";
        clearInterval(interval); // Detener el temporizador
        return;
      }

      // Calcula días, horas, minutos y segundos restantes
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Actualiza el contador
      document.getElementById("countdown").innerHTML = `
        ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos
      `;
    }

    // Inicia el temporizador
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Ejecutar inmediatamente
  }
}
