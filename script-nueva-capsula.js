// Obtener el botón de "Crear Nueva Cápsula"
document.getElementById("createNewBtn").addEventListener("click", function() {
    window.location.href = "nueva-capsula.html"; // Redirige a la página de creación
  });
  
  // Lógica para la cuenta regresiva y mostrar mensaje (ejemplo básico)
  function showCountdown() {
    const countdownElement = document.getElementById("countdown");
  
    // Suponiendo que tienes una fecha para la cápsula, por ejemplo:
    const openingDate = new Date("2024-12-31T23:59:59"); // Ajusta la fecha y hora
    const currentDate = new Date();
    const countdown = openingDate - currentDate;
  
    if (countdown > 0) {
      const daysLeft = Math.floor(countdown / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((countdown % (1000 * 60)) / 1000);
  
      countdownElement.textContent = `${daysLeft} días, ${hoursLeft} horas, ${minutesLeft} minutos, ${secondsLeft} segundos`;
    } else {
      countdownElement.textContent = "¡La cápsula ya está abierta!";
      document.getElementById("unlockBtn").style.display = "block"; // Mostrar el botón de abrir
    }
  }
  
  // Llamar a la función para iniciar la cuenta regresiva
  showCountdown();
  
  // Actualizar la cuenta regresiva cada segundo
  setInterval(showCountdown, 1000);
  