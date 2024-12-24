if (!localStorage.getItem("capsules")) {
    localStorage.setItem("capsules", JSON.stringify([]));
  }
  

// Función para crear una nueva cápsula
document.getElementById("createCapsuleForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Obtener los datos del formulario
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const participants = document.getElementById("participants").value.split(",");
    
    // Arreglo para almacenar los mensajes multimedia
    const messages = [];
  
    // Verificar el tipo de mensaje y agregarlo a los mensajes
    const messageType = document.getElementById("messageType").value;
    const messageContent = document.getElementById("messageContent").value;
  
    if (messageType === "text") {
      messages.push({ type: "text", content: messageContent });
    } else if (messageType === "image") {
      messages.push({ type: "image", content: messageContent });
    } else if (messageType === "video") {
      messages.push({ type: "video", content: messageContent });
    } else if (messageType === "audio") {
      messages.push({ type: "audio", content: messageContent });
    }
  
    // Crear la cápsula
    const newCapsule = {
      title: title,
      date: new Date(date),
      participants: participants,
      messages: messages,
    };
  
    // Obtener las cápsulas almacenadas en localStorage
    const capsules = JSON.parse(localStorage.getItem("capsules")) || [];
    capsules.push(newCapsule);
  
    // Guardar las cápsulas de nuevo en localStorage
    localStorage.setItem("capsules", JSON.stringify(capsules));
  
    // Redirigir a la página principal (index.html)
    window.location.href = "index.html"; 
  });
  