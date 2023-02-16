// Las cajas del hero se hacen visibles después de 1 segundo
$(document).ready(function () {
  setTimeout(function () {
    $(".caja-1").addClass("visible");
    $(".caja-2").addClass("visible");
    $(".caja-3").addClass("visible");
    $(".caja-4").addClass("visible");
    $(".caja-1-sobre-nosotros").addClass("visible");
    $(".caja-2-sobre-nosotros").addClass("visible");
    $(".caja-3-sobre-nosotros").addClass("visible");
    $(".caja-4-sobre-nosotros").addClass("visible");
  }, 1000);
});

// Función para implementar contador en el home
function startCounterWhenVisible() {
  // Obtener el elemento de la sección por ID
  const section = document.getElementById('pagina-2');

  // Obtener la posición y tamaño de la sección
  const rect = section.getBoundingClientRect();

  // Verificar si la sección es visible en la ventana
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // Si la sección es visible, iniciar el contador
    let contador = 0;
    setInterval(function () {
      if (contador === 930) return
      contador = contador + 10;
      document.getElementById("contador").innerHTML = contador;
    }, 15);
  } else {
    // Si la sección no es visible, esperar 100ms y volver a verificar
    setTimeout(startCounterWhenVisible, 100);
  }
}

// Llamar a la función cuando se carga la página
const section = document.getElementById('pagina-2');
if(section) {
  window.addEventListener('load', startCounterWhenVisible);
}

// Función para implementar contador en sobre nosotros
function startCounterWhenVisible2() {
  // Obtener el elemento de la sección por ID
  const sobreNosotros = document.getElementById('pagina-1-sobre-nosotros');

  // Obtener la posición y tamaño de la sección
  const rect = sobreNosotros.getBoundingClientRect();

  // Verificar si la sección es visible en la ventana
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // Si la sección es visible, iniciar el contador
    let contador = 0;
    setInterval(function () {
      if (contador === 368) return
      contador = contador + 4;
      document.getElementById("contador").innerHTML = contador;
    }, 18);
  } else {
    // Si la sección no es visible, esperar 100ms y volver a verificar
    setTimeout(startCounterWhenVisible2, 100);
  }
}

// Función que descarga el archivo PDF
// Define la función que se ejecutará cuando se haga clic en el enlace
function descargarPDF() {
  // Nombre del archivo PDF que se descargará
  const nombreArchivo = 'M3G Prueba Web Instrucciones.pdf';

  // URL relativa del archivo PDF en la carpeta del proyecto
  const urlArchivo = './docs/' + nombreArchivo;

  // Crea un enlace para descargar el archivo
  const enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = urlArchivo;
  enlaceDescarga.download = nombreArchivo;

  // Simula un clic en el enlace para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();
  document.body.removeChild(enlaceDescarga);
}

// Asigna la función descargarPDF como manejador del evento "click" del enlace
const enlaceDescarga = document.querySelector('#boton-descarga');
enlaceDescarga.addEventListener('click', descargarPDF);


// Función para poner en movimiento las barras de sobre nosotros
function startBarra() {
  // Obtener el elemento de la sección por ID
  const sobreNosotros = document.getElementById('pagina-1-sobre-nosotros');

  // Obtener la posición y tamaño de la sección
  const rect = sobreNosotros.getBoundingClientRect();

  // Verificar si la sección es visible en la ventana
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // Si la sección es visible, iniciar el contador
    let barra = 0;
    setInterval(function () {
      if (barra === 230) return;
      document.getElementById("mi-progress").setAttribute("value", barra);
      barra = barra + 1;
    }, 5);
  } else {
    // Si la sección no es visible, esperar 100ms y volver a verificar
    setTimeout(startBarra, 100);
  }
}

function startBarra2() {
  // Obtener el elemento de la sección por ID
  const sobreNosotros = document.getElementById('pagina-1-sobre-nosotros');

  // Obtener la posición y tamaño de la sección
  const rect3 = sobreNosotros.getBoundingClientRect();

  // Verificar si la sección es visible en la ventana
  if (rect3.top >= 0 && rect3.bottom <= window.innerHeight) {
    // Si la sección es visible, iniciar el contador
    let barra = 0;
    setInterval(function () {
      if (barra === 250) return;
      document.getElementById("mi-progress-2").setAttribute("value", barra);
      barra = barra + 1;
    }, 5);
  } else {
    // Si la sección no es visible, esperar 100ms y volver a verificar
    setTimeout(startBarra2, 100);
  }
}

function startBarra3() {
  // Obtener el elemento de la sección por ID
  const sobreNosotros = document.getElementById('pagina-1-sobre-nosotros');

  // Obtener la posición y tamaño de la sección
  const rect3 = sobreNosotros.getBoundingClientRect();

  // Verificar si la sección es visible en la ventana
  if (rect3.top >= 0 && rect3.bottom <= window.innerHeight) {
    // Si la sección es visible, iniciar el contador
    let barra = 0;
    setInterval(function () {
      if (barra === 287) return;
      document.getElementById("mi-progress-3").setAttribute("value", barra);
      barra = barra + 1;
    }, 5);
  } else {
    // Si la sección no es visible, esperar 100ms y volver a verificar
    setTimeout(startBarra3, 100);
  }
}

function startBarra4() {
  // Obtener el elemento de la sección por ID
  const sobreNosotros = document.getElementById('pagina-1-sobre-nosotros');

  // Obtener la posición y tamaño de la sección
  const rect3 = sobreNosotros.getBoundingClientRect();

  // Verificar si la sección es visible en la ventana
  if (rect3.top >= 0 && rect3.bottom <= window.innerHeight) {
    // Si la sección es visible, iniciar el contador
    let barra = 0;
    setInterval(function () {
      if (barra === 164) return;
      document.getElementById("mi-progress-4").setAttribute("value", barra);
      barra = barra + 1;
    }, 5);
  } else {
    // Si la sección no es visible, esperar 100ms y volver a verificar
    setTimeout(startBarra4, 100);
  }
}

function startBarra5() {
  // Obtener el elemento de la sección por ID
  const sobreNosotros = document.getElementById('pagina-1-sobre-nosotros');

  // Obtener la posición y tamaño de la sección
  const rect3 = sobreNosotros.getBoundingClientRect();

  // Verificar si la sección es visible en la ventana
  if (rect3.top >= 0 && rect3.bottom <= window.innerHeight) {
    // Si la sección es visible, iniciar el contador
    let barra = 0;
    setInterval(function () {
      if (barra === 150) return;
      document.getElementById("mi-progress-5").setAttribute("value", barra);
      barra = barra + 1;
    }, 5);
  } else {
    // Si la sección no es visible, esperar 100ms y volver a verificar
    setTimeout(startBarra5, 100);
  }
}

function startBarra6() {
  // Obtener el elemento de la sección por ID
  const sobreNosotros = document.getElementById('pagina-1-sobre-nosotros');

  // Obtener la posición y tamaño de la sección
  const rect3 = sobreNosotros.getBoundingClientRect();

  // Verificar si la sección es visible en la ventana
  if (rect3.top >= 0 && rect3.bottom <= window.innerHeight) {
    // Si la sección es visible, iniciar el contador
    let barra = 0;
    setInterval(function () {
      if (barra === 150) return;
      document.getElementById("mi-progress-6").setAttribute("value", barra);
      barra = barra + 1;
    }, 5);
  } else {
    // Si la sección no es visible, esperar 100ms y volver a verificar
    setTimeout(startBarra6, 100);
  }
}

// Llamar a la función cuando se carga la página
const sobreNosotros = document.getElementById('pagina-1-sobre-nosotros');
if (sobreNosotros) {
  window.addEventListener('load', startCounterWhenVisible2);
  window.addEventListener('load', startBarra());
  window.addEventListener('load', startBarra2());
  window.addEventListener('load', startBarra3());
  window.addEventListener('load', startBarra4());
  window.addEventListener('load', startBarra5());
  window.addEventListener('load', startBarra6());
}