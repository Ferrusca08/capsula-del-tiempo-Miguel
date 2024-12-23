
document.getElementById('createNewBtn').addEventListener('click', function() {
    // Redirigir a la página de crear una nueva cápsula
    window.location.href = 'nueva_capsula.html'; // Cambia esta URL a la página correcta si es necesario
  });


document.getElementById('capsuleForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir que el formulario se envíe de forma tradicional
  
    // Obtener los datos del formulario
    const message = document.getElementById('message').value;
    const files = document.getElementById('files').files;
    const unlockDate = document.getElementById('unlockDate').value;
    const people = [];
    if (document.getElementById('person1').value) people.push(document.getElementById('person1').value);
    if (document.getElementById('person2').value) people.push(document.getElementById('person2').value);
  
    // Validar que se haya seleccionado una fecha y se haya escrito un mensaje
    if (!unlockDate || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Crear un objeto con la información de la cápsula
    const capsuleData = {
      message,
      files: files,
      unlockDate: unlockDate,
      people: people
    };
  
    // Simular guardar los datos en el almacenamiento local o enviarlos a un servidor
    console.log('Cápsula del tiempo creada:', capsuleData);
  
    // Mostrar mensaje de confirmación
    document.getElementById('confirmationMessage').textContent = "¡Tu cápsula del tiempo ha sido guardada exitosamente!";
  
    // Limpiar los campos del formulario
    document.getElementById('capsuleForm').reset();
  });
  