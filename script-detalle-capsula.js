document.addEventListener("DOMContentLoaded", function () {
    const capsule = JSON.parse(localStorage.getItem("selectedCapsule"));
    if (!capsule) {
      document.getElementById("capsuleTitle").textContent = "Cápsula no encontrada.";
      document.getElementById("countdown").textContent = "No hay información disponible.";
      return;
    }
  
    // Mostrar el título
    document.getElementById("capsuleTitle").textContent = capsule.title;
  
    // Configurar el conteo regresivo
    const openingDate = new Date(capsule.date);
  
    function updateCountdown() {
      const now = new Date();
      const timeDifference = openingDate - now;
  
      if (timeDifference <= 0) {
        document.getElementById("countdown").textContent = "¡Es hora de abrir tu cápsula!";
        clearInterval(interval); // Detener el temporizador
        return;
      }
  
      // Calcula días, horas, minutos y segundos restantes
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      // Actualiza el contador
      document.getElementById("countdown").textContent = `
        ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos
      `;
    }
  
    // Inicia el temporizador
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Ejecutar inmediatamente
  });
  