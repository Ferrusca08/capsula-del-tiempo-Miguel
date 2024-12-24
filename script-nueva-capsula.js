document.getElementById("capsuleForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recarga de página
  
    // Obtener los valores del formulario
    const capsuleDate = document.getElementById("capsuleDate").value;
    const capsulePeople = document.getElementById("capsulePeople").value;
  
    // Validar que la fecha sea válida
    if (!capsuleDate || new Date(capsuleDate) <= new Date()) {
      alert("Por favor, selecciona una fecha válida en el futuro.");
      return;
    }
  
    // Guardar los datos en localStorage
    localStorage.setItem("capsuleDate", capsuleDate);
    localStorage.setItem("capsulePeople", capsulePeople);
  
    // Redirigir a la página principal
    window.location.href = "index.html";
  });
  