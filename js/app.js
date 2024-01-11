const modalImagen = document.querySelector('#modal-imagen');

modalImagen.addEventListener('show.bs.modal', function (event) {
  const enlace = event.relatedTarget;
  const rutaImagen = enlace.getAttribute('data-bs-imagen');

  //built img  
  const imagen = document.createElement('IMG') //it create the element <IMG>
  imagen.src = `img/${rutaImagen}.jpg`;
  //backstics=alt+96 ``
  imagen.classList.add('img-fluid');
  //agrega la clase para que tenga estilo  
  imagen.alt = 'Galery Image';

  const contenidoModal = document.querySelector('.modal-body');
  contenidoModal.appendChild(imagen);

});

modalImagen.addEventListener('hidden.bs.modal', function () {
  const contenidoModal = document.querySelector('.modal-body');
  contenidoModal.textContent = '';
});


// NOTAS:
// CUANDO LANSAS UN console.LOG HAY DIFERENCIAS ENTRE MANMDAR UN TEXTO DE VERIFICACION PARA DETECTAR EVENTOS Y MANDAR METHODOS 
// EX  console.log(event.relatedTarget); NO FUNCIONA SI LO MANDAS console.log('event.relatedTarget');