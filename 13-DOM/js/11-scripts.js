// No siempre estarás haciendo traversing a tu dom, 

const btnFlotante = document.querySelector('.btn-flotante');


const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

// Anterior funcion

// function mostrarOcultarFooter() {
//     if( footer.classList.contains('activo') ) {
//         footer.classList.remove('activo');
//         this.classList.remove('activo');
//         this.textContent = 'Idioma y Moneda';
//     } else {
//         footer.classList.add('activo');
//         this.classList.add('activo');
//         this.textContent = 'X Cerrar';
//     }
// }


//  Versión optimizada de la función: 
// - Reemplaza if-else con toggle() para alternar clases de manera más eficiente.
// - Actualiza dinámicamente el texto del botón según el estado del footer.

function mostrarOcultarFooter() {
    footer.classList.toggle('activo');
    this.classList.toggle('activo');
    this.textContent = footer.classList.contains('activo') ? 'X Cerrar' : 'Idioma y Moneda';
}