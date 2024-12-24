document.getElementById("createNewBtn").addEventListener("click", function () {
  window.location.href = "nueva_capsula.html"; // Redirige a la página de creación
});

// Cargar las cápsulas desde localStorage
function loadCapsules() {
  const capsules = JSON.parse(localStorage.getItem("capsules")) || [];
  displayCapsules(capsules);
}

// Mostrar las cápsulas como botones
function displayCapsules(capsules) {
  const container = document.getElementById("capsulesContainer");
  container.innerHTML = ""; // Limpiar el contenedor antes de añadir nuevos elementos

  capsules.forEach((capsule, index) => {
    const button = document.createElement("button");
    button.textContent = capsule.title; // Mostrar el título como texto del botón
    button.className = "capsule-button";
    button.addEventListener("click", function () {
      // Guardar el ID de la cápsula seleccionada en localStorage
      localStorage.setItem("selectedCapsule", JSON.stringify(capsule));
      // Redirigir a la página de detalle
      window.location.href = "capsula_detalle.html";
    });
    container.appendChild(button);
  });
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", loadCapsules);
